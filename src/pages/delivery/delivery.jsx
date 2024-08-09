import { useState, useEffect, useRef } from "react";
import DeliveryList from "../../components/delivery/deliveryList";
import StatusChangeBottomModal from "../../components/delivery/changeStatus";
import SearchBoxModal from "../../components/delivery/searchBox";
import Api from "/src/services/axios";
// import { InfiniteScroll } from "/src/services/utilities";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { toastOptions } from "/src/services/toast";
import { ProgressSpinner } from "primereact/progressspinner";
import { RiSearchLine, RiFilter2Line } from "@remixicon/react";
import { v4 as uuid4 } from "uuid";
import { setList } from "/src/services/store/deliveryListReducer/deliveryListSlice";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button } from "primereact/button";

function DeliveryPage() {
  // const [DeliveryListData, setDeliveryListData] = useState([]);
  const DeliveryListData = useSelector((state) => state.deliverylist);
  const dataListsElement = useRef();

  const navigator = useNavigate();
  const [SearchBoxShow, setSearchBoxShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [HasMore, setHasMore] = useState(true);
  const dispatch = useDispatch();
  const [FilterDic, setFilterDic] = useState({
    search: null || "",
    filter: {},
  });

  // const [PageDic, setPageDic] = useState({ offset: 0, length: 20 });

  const fetchData = async (start = false) => {
    start && setLoading(true);
    if (start) {
      dispatch(setList({ list: [], offset: 0 }));
    }

    Api.get("/get-deliveries", {
      params: {
        offset: start ? 0 : DeliveryListData.offset,
        length: 20,
        filter: JSON.stringify(FilterDic),
      },
    })
      .then((res) => {
        let new_list = [];
        if (!start) {
          new_list = [...DeliveryListData.list, ...res.data.delivery_list];
        } else {
          new_list = res.data.delivery_list;
        }
        console.log(new_list, "new");

        dispatch(setList({ list: new_list }));
        setHasMore(res.data.has_more);
      })
      .catch((e) => {
        toast.error("Something went wrong", toastOptions.error);
      })
      .finally((e) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    DeliveryListData.list.length == 0 ? fetchData(true) : setLoading(false);
  }, [FilterDic]);

  const onChangeData = async (id, _key, value) => {
    await Api.post("/change-delivery-data", { id: id, key: _key, value: value })
      .then((res) => {
        const newList = DeliveryListData.list.map((item) => {
          // update_key = _key;
          if (item.id === id) {
            const updatedItem = { ...item, [_key]: value };
            return updatedItem;
          }
          return item;
        });
        dispatch(setList({ list: newList }));
        // setDeliveryListData(newList);
      })
      .catch((e) => {
        toast.error(
          <p>
            Update failed <br />
            <small className="text-slate-500">{e.message}</small>
          </p>,
          toastOptions.error
        );
      });
  };

  return (
    <div className="d-card place-content-start normal-page">
      <div className="bg-slate-300 rounded-lg p-1 row-span-1">
        <div className="grid grid-cols-10">
          <span className="col-span-8 truncate">
            Delivery{" "}
            {FilterDic.search && (
              <span className="text-xs text-white-600 ">
                result of {FilterDic.search}
              </span>
            )}
          </span>
          <RiSearchLine
            color="rgb(107 114 128);"
            className="border border-1 rounded bg-white h-7 w-7 active:translate-y-1 transition transform duration-150"
            onClick={() => {
              setSearchBoxShow(true);
            }}
          />
          <RiFilter2Line
            color="rgb(107 114 128);"
            className="border border-1 rounded bg-white h-7 w-7 active:translate-y-1 transition transform duration-150"
          />
          {/* <Button icon="pi pi-search" size="small" aria-label="Search" /> */}
          {/* <Button icon="pi pi-check" /> */}
        </div>
      </div>
      <div
        className="mt-2 overflow-y-scroll scroll-bar-div w-100"
        style={{ height: "80vh" }}
        ref={dataListsElement}
        id="scrollableDiv"
      >
        <InfiniteScroll
          dataLength={DeliveryListData.list.length}
          next={fetchData}
          hasMore={HasMore}
          scrollableTarget="scrollableDiv"
          endMessage={
            <span className="text-sm flex justify-center">
              You got all the data
            </span>
          }
          className="h-full"
          loader={
            <ProgressSpinner
              style={{ width: "20px", height: "20px" }}
              strokeWidth="8"
              fill="var(--surface-ground)"
              animationDuration=".5s"
              className="place-self-center flex"
            />
          }
        >
          {!loading ? (
            <>
              {DeliveryListData.list.length != 0 ? (
                <>
                  {DeliveryListData.list.map((ele) => (
                    <DeliveryList
                      key={uuid4()}
                      id={ele.id}
                      delivery_no={ele.delivery_no}
                      do_date={ele.do_date}
                      customer_name={ele.customer_name}
                      sales_person={ele.sales_person}
                      follow_status={ele.follow_status}
                    />
                  ))}
                </>
              ) : (
                <div className="grid place-content-center	h-full">
                  <span className="text-center text-sm my-4">No result </span>
                  <Button
                    label="Go Back"
                    outlined
                    size="small"
                    severity="danger"
                    onClick={() => {
                      setFilterDic({ search: "", filter: {} });
                    }}
                  />
                </div>
              )}
            </>
          ) : (
            <div
              className="grid place-content-center	h-full"
              style={{ height: "80vh" }}
            >
              <ProgressSpinner
                style={{ width: "50px", height: "50px" }}
                strokeWidth="8"
                fill="var(--surface-ground)"
                animationDuration=".5s"
                className="place-self-center flex"
              />
            </div>
          )}
        </InfiniteScroll>
      </div>
      <StatusChangeBottomModal onChangeData={onChangeData} />
      <SearchBoxModal
        setFilterDic={setFilterDic}
        fetchData={fetchData}
        setSearchBoxShow={setSearchBoxShow}
        SearchBoxShow={SearchBoxShow}
      />
    </div>
  );
}

export default DeliveryPage;
