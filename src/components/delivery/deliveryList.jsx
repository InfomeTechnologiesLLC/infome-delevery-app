import { setDailog } from "/src/services/store/deliveryStatusReducer/dailogBoxSlice";
import {
  RiCheckboxFill,
  RiProgress7Fill,
  RiCircleLine,
} from "@remixicon/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function DeliveryList({
  delivery_no,
  customer_name,
  sales_person,
  do_date,
  id,
  follow_status,
}) {
  const options = {
    2: {
      name: "Done",
      code: "2",
      icon: <RiCheckboxFill color="green" className="place-self-center" />,
    },
    1: {
      name: "Progress",
      code: "1",
      icon: <RiProgress7Fill color="orange" className="place-self-center" />,
    },
    0: {
      name: "Pending",
      code: "0",
      icon: <RiCircleLine color="red" className="place-self-center" />,
    },
  };

  const dispatch = useDispatch();

  return (
    <div className="grid grid-rows-1 h-12 my-1 border border-solid border-slate-500 rounded-lg p-1 bg-gradient-to-l from-slate-200 to-slate-100 active:bg-gradient-to-t active:border-sky-400 active:border-2 transition-all transform active:translate-y-1 duration-150 ease-in-out delivery-list-item">
      <div className="grid grid-cols-5">
        <Link
          className="col-span-4"
          to={`/delivery/individual/${id}`}
          // onClick={() => {
          //   navigator(`/delivery/individual/${id}`);
          // }}
        >
          <div className="text-sm truncate">{customer_name}</div>
          <div className="grid grid-cols-3">
            <div className="text-xs">{delivery_no}</div>
            <div className="text-xs">{do_date}</div>
            <div className="text-xs text-start">{sales_person}</div>
          </div>
        </Link>
        <div
          className="grid bg-white rounded active:translate-y-1 ease-in-out transition"
          onClick={() => {
            dispatch(
              setDailog({
                show: true,
                value: follow_status ? follow_status : 0,
                selected_id: id,
              })
            );
          }}
        >
          {options[follow_status ? follow_status : 0].icon}
          <p className="text-xs text-center">
            {options[follow_status ? follow_status : 0].name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DeliveryList;
