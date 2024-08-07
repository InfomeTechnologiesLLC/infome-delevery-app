import { Button } from "primereact/button";
import { RiExternalLinkFill, RiSettingsFill } from "@remixicon/react";
import { useEffect, useState } from "react";
import Api from "../../services/axios";

import { Dialog } from "primereact/dialog";

function UserPage() {
  const [userDetails, setUserDetails] = useState({});
  const [LogOutDialog, setLogOutDialog] = useState(false);

  useEffect(() => {
    Api.get("/get-user-details").then((res) => {
      console.log(res);
      setUserDetails(res.data);
    });
  }, []);

  const onLogout = () => {};
  return (
    <div
      className="normal-page h-full grid grid-rows-10 "
      style={{ height: "90vh" }}
    >
      <div className="row-span-3 flex grid-cols-2">
        <img
          src={userDetails.image_url}
          className="rounded-full h-24 w-24 place-self-center border-4 p-1 border-red-400 shadow-lg"
        />
        <div className="user-details  place-content-center ml-3 grid">
          <span className="text-start text-lg font-bold text-shadow">
            {userDetails.full_name}
          </span>
          <span className="text-start text-sm text-shadow">
            {userDetails.position_name}
          </span>
          <span className="text-start text-sm text-shadow">
            {userDetails.role_name}
          </span>
        </div>
      </div>

      <div className="row-span-7 d-card grid grid-rows-8">
        {/* <div className="row-span-4"></div> */}
        <div className="row-start-6 row-span-full w-full grid grid-rows-3 gap-1">
          <Button
            severity="secondary"
            rounded
            outlined
            className="place-content-center font-bold"
          >
            <RiSettingsFill color="" /> Settings
          </Button>
          <Button
            severity="secondary"
            rounded
            outlined
            className="place-content-center font-bold"
            onClick={() => {
              window.open("http://crm.infoeventz.com/dashboard");
            }}
          >
            <RiExternalLinkFill color="" /> Open Crm
          </Button>
          <Button
            severity="danger"
            rounded
            label="Log Out"
            style={{ width: "50%" }}
            className="place-self-center"
            onClick={() => {
              setLogOutDialog(true);
            }}
          />
        </div>
      </div>

      <Dialog
        header="Log Out"
        visible={LogOutDialog}
        style={{ width: "90vw" }}
        onHide={() => {
          if (!LogOutDialog) return;
          setLogOutDialog(false);
        }}
        draggable={false}
        footer={
          <div className="flex w-full place-content-end">
            <Button
              severity="secondary"
              outlined
              label="Cancel"
              onClick={() => {
                setLogOutDialog(false);
              }}
            ></Button>
            <Button severity="danger" label="Yes"></Button>
          </div>
        }
      >
        <p className="m-0 grid gap-3">
          Are you sure you want to log out?
          <span className="text-xs">
            Note: You will need to log in again to access your account.
          </span>
        </p>
      </Dialog>
    </div>
  );
}

export default UserPage;
