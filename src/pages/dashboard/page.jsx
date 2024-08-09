import "./page.css";
// import UserSection from "./sections/userSection";
// import CountsSection from "./sections/countsSection";
// import DeliverySummerySection from "./sections/deliverySummerySection";
import Api from "/src/services/axios";
import { useEffect, useState } from "react";
// import MessageSection from "./sections/MessageSection";
// import GoogleMapReact from "google-map-react";

import {
  RiCheckboxFill,
  RiProgress7Fill,
  RiCircleLine,
} from "@remixicon/react";
import DashMap from "./sections/dashMap";
function DashboardPage() {
  const [DashboardData, setDashboardData] = useState({});
  const [TodayDeliveriesList, setTodayDeliveriesList] = useState([]);
  useEffect(() => {
    Api.get("/get-dashboard-details").then((res) => {
      setDashboardData(res.data);
      console.log(res.data);

      // setTodayDeliveriesList(res.data.today_deliveries_list);
    });
  }, []);

  return (
    <div className="h-full normal-page grid-rows-10 grid gap-4 ">
      {/* <h2 className="font-bold text-xl">Dashboard</h2> */}
      {/* <UserSection data={DashboardData} /> */}
      {/* <MessageSection /> */}
      <div className="top-name flex justify-between">
        <div className="grid content-center">
          <span className="font-bold text-xl">
            <span className="text-sky-500">Hi</span> Mansoor
          </span>
          <span className="text-xs">25,may</span>
        </div>
        <img
          className="w-50 info-del-logo"
          src="/images/info-del-logo.png"
          alt="infome icon"
        />
      </div>
      <div className="notification-card row-span-2">
        <div className="p-1 border border-red-500 bg-white rounded card-frosted h-full text-sm overflow-y-auto">
          🎈 Greetings and welcome to the InfoDevliery app. With this
          application, you can now control your delivery. <br /> <br /> I hope
          you had an enjoyable day 🌅.
        </div>
      </div>

      <div className="delivery-overview row-span-3 ">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-sm">Delivery Overview</span>
          <span className="font-bold text-sm text-sky-500">Today</span>
        </div>

        <div className="grid grid-cols-3 h-full gap-2">
          <div className="total-delivery-overview-card border border-sky-500 h-full grid rounded-lg card-frosted p-1 total-delivery-overview-card">
            <span className="text-xs font-bold text-slate-500">Total</span>
            <span className="text-4xl text-center font-bold">
              {DashboardData?.today_delivery_counts?.total}
            </span>
          </div>
          <div className="col-span-2 grid grid-rows-3 gap-2">
            <div className="p-1 border border-sky-500 rounded-lg card-frosted  flex justify-between align-center">
              <div className="grid">
                <span className="font-bold text-xs text-slate-500">
                  Pending
                </span>
                <span className="text-red-500 font-bold">
                  {DashboardData?.today_delivery_counts?.pending}
                </span>
              </div>
              <RiCircleLine color="red" />
            </div>
            <div className="p-1 border border-sky-500 rounded-lg card-frosted  flex justify-between align-center">
              <div className="grid">
                <span className="font-bold text-xs text-slate-500">
                  Out For Delivery
                </span>
                <span className="font-bold text-orange-500">
                  {DashboardData?.today_delivery_counts?.progress}
                </span>
              </div>
              <RiProgress7Fill color="orange" />
            </div>
            <div className="p-1 border border-sky-500 rounded-lg card-frosted  flex justify-between align-center">
              <div className="grid">
                <span className="font-bold text-xs text-slate-500">Done</span>
                <span className="text-green-500 font-bold">
                  {DashboardData?.today_delivery_counts?.completed}
                </span>
              </div>
              <RiCheckboxFill color="green" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 row-span-3 p-1 bg-white rounded border border-red-500">
        <DashMap />
      </div>
    </div>
  );
}

export default DashboardPage;
