import { RiTruckLine } from "@remixicon/react";

function CountsSection({ data }) {
  console.log(data);
  return (
    // <div className="counts-divs">
    //   <h2 className="font-bold text-xl">Dashboard</h2>

    //   <div className="grid grid-cols-3 gap-2 h-28">
    //     <div className="d-card text-sm grid border-2 border-slate-500">
    //       Today
    //       <div className="place-self-center text-4xl ">
    //         {data.today_deliveries_count ? data.today_deliveries_count : 0}
    //       </div>
    //     </div>

    //     <div className="d-card grid text-sm grid border-2 border-yellow-500">
    //       Pending
    //       <div className="place-self-center text-4xl">
    //         {data.today_deliveries_count ? data.today_deliveries_count : 0}
    //       </div>
    //     </div>
    //     <div className="d-card grid text-sm bg-gradient-to-t grid border-2 border-green-500">
    //       Completed
    //       <div className="place-self-center text-4xl">
    //         {data.today_deliveries_count ? data.today_deliveries_count : 0}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="grid grid-rows-3 gap-1">
      <div className="border-2 border-slate-500 rounded-lg grid grid-cols-8 h-full ">
        <div className="grid content-center">
          <RiTruckLine className="mx-2" />
        </div>
        <div className="place-content-between row-span-7">
          <div className="grid grid-rows-2">
            <span className="text-xs font-bold text-slate-500">Today</span>
            <span className="text-xs">Today</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1">
        <div className="border-2 border-red-500 rounded-lg"></div>
        <div className="border-2 border-green-500 rounded-lg"></div>
      </div>
    </div>
  );
}

export default CountsSection;
