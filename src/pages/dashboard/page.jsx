import "./page.css";
import UserSection from "./sections/userSection";
import CountsSection from "./sections/countsSection";
import DeliverySummerySection from "./sections/deliverySummerySection";
import Api from "/src/services/axios";
import { useEffect, useState } from "react";
import MessageSection from "./sections/MessageSection";
function DashboardPage() {
  const [DashboardData, setDashboardData] = useState({});
  const [TodayDeliveriesList, setTodayDeliveriesList] = useState([]);
  useEffect(() => {
    Api.get("/get-dashboard-details").then((res) => {
      setDashboardData(res.data);
      setTodayDeliveriesList(res.data.today_deliveries_list);
    });
  }, []);

  return (
    <div className="grid grid-rows-5 h-full normal-page">
      {/* <UserSection data={DashboardData} /> */}
      {/* <MessageSection /> */}
      <CountsSection data={DashboardData} />
      <DeliverySummerySection today_deliveries={TodayDeliveriesList} />
    </div>
  );
}

export default DashboardPage;
