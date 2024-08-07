import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useState } from "react";
import { ListBox } from "primereact/listbox";
import { useSelector, useDispatch } from "react-redux";
import {
  RiCheckboxFill,
  RiProgress7Fill,
  RiCircleLine,
} from "@remixicon/react";
import { setDailog } from "/src/services/store/deliveryStatusReducer/dailogBoxSlice";
function StatusChangeBottomModal({ onChangeData }) {
  const options = [
    {
      name: "Done",
      code: 2,
      icon: <RiCheckboxFill color="green" className="place-self-center mx-2" />,
    },
    {
      name: "Out for delivery",
      code: 1,
      icon: (
        <RiProgress7Fill color="orange" className="place-self-center mx-2" />
      ),
    },
    {
      name: "Pending",
      code: 0,
      icon: <RiCircleLine color="red" className="place-self-center mx-2" />,
    },
  ];

  const optionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        {option.icon}
        <div>{option.name}</div>
      </div>
    );
  };

  const deliveryStatusDialogShow = useSelector((state) => state.deliverydialog);

  const changeStatus = (e) => {
    dispatch(
      setDailog({
        show: false,
        value: e.value,
      })
    );

    onChangeData(
      deliveryStatusDialogShow.selected_id,
      "follow_status",
      e.value
    );
  };

  const closeDialog = () => {
    dispatch(
      setDailog({
        show: false,
        value: deliveryStatusDialogShow.value,
      })
    );
  };
  const dispatch = useDispatch();
  return (
    <Dialog
      visible={deliveryStatusDialogShow.show}
      position="bottom"
      className="w-5/6"
      draggable={false}
      onHide={() => closeDialog()}
      header={"Change Status"}
      closeIcon={""}
    >
      <ListBox
        value={deliveryStatusDialogShow.value}
        options={options}
        itemTemplate={optionTemplate}
        optionLabel="name"
        optionValue="code"
        onChange={changeStatus}
      />
      <Button
        label="Close"
        className="w-full my-2"
        outlined
        onClick={() => closeDialog()}
      />
    </Dialog>
  );
}

export default StatusChangeBottomModal;
