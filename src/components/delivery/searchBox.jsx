import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { RiSearchLine } from "@remixicon/react";
import { useRef, useState } from "react";
import { setList } from "/src/services/store/deliveryListReducer/deliveryListSlice";
import { useSelector, useDispatch } from "react-redux";
function SearchBoxModal({
  setFilterDic,
  fetchData,
  setSearchBoxShow,
  SearchBoxShow,
}) {
  const searchText = useRef();
  const dispatch = useDispatch();
  const onSearch = async () => {
    console.log("CALLED seach");
    setFilterDic((prevData) => ({
      ...prevData,
      search: searchText.current.value,
    }));
    
    dispatch(setList({ offset: 0, list: [] }));

    setSearchBoxShow(false);
  };
  return (
    <Dialog
      visible={SearchBoxShow}
      position="center"
      className="w-5/6"
      draggable={false}
      onHide={() => {
        setSearchBoxShow(false);
      }}
      header={"Search"}
    >
      <div className="grid grid-cols-5 mt-2">
        <InputText
          className="col-span-4"
          placeholder={"id,customer name"}
          ref={searchText}
        />
        <Button
          className="p-0 place-content-center ml-1"
          id="search-input"
          onClick={() => {
            onSearch();
          }}
        >
          <RiSearchLine />
        </Button>
      </div>
    </Dialog>
  );
}

export default SearchBoxModal;
