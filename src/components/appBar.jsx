import {
  RiDashboardLine,
  RiDashboardFill,
  RiTruckLine,
  RiTruckFill,
  RiUserLine,
  RiUserFill,
} from "@remixicon/react";
import { useNavigate } from "react-router-dom";

function AppBar() {
  const navigate = useNavigate();

  return (
    <div className="justify-center flex">
      <div className="grid grid-cols-3 app-bar">
        <div
          className="place-self-center grid text-sm app-bar-btn active active:translate-y-1 transition transform duration-150"
          onClick={() => {
            navigate("/dash");
          }}
        >
          {location.pathname == "/dash" ? (
            <RiDashboardFill className="place-self-center" color="red" />
          ) : (
            <RiDashboardLine className="place-self-center" />
          )}
          dashboard
        </div>
        <div
          className="place-self-center grid text-sm	app-bar-btn active active:translate-y-1 transition transform duration-150"
          onClick={() => {
            navigate("/delivery");
          }}
        >
          {location.pathname.includes("/delivery") ? (
            <RiTruckFill className="place-self-center" color="red" />
          ) : (
            <RiTruckLine className="place-self-center" />
          )}
          Delivery
        </div>
        <div
          className="place-self-center grid text-sm	app-bar-btn active active:translate-y-1 transition transform duration-150"
          onClick={() => {
            navigate("/user");
          }}
        >
          {location.pathname == "/user" ? (
            <RiUserFill className="place-self-center" color="red" />
          ) : (
            <RiUserLine className="place-self-center" />
          )}
          User
        </div>
      </div>
    </div>
  );
}

export default AppBar;
