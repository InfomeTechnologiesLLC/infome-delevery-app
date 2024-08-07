function CountsSection({ data }) {
  console.log(data);
  return (
    <div className="grid grid-cols-3 gap-2 h-28">
      <div className="d-card text-sm grid bg-gradient-to-t from-slate-400 to-slate-100">
        Today
        <div className="place-self-center text-4xl ">
          {data.today_deliveries_count ? data.today_deliveries_count : 0}
        </div>
      </div>

      <div className="d-card grid text-sm bg-gradient-to-t from-yellow-400 to-yellow-100">
        Pending
        <div className="place-self-center text-4xl">
          {data.today_deliveries_count ? data.today_deliveries_count : 0}
        </div>
      </div>
      <div className="d-card grid text-sm bg-gradient-to-t from-green-400 to-green-100">
        Completed
        <div className="place-self-center text-4xl">
          {data.today_deliveries_count ? data.today_deliveries_count : 0}
        </div>
      </div>
    </div>
  );
}

export default CountsSection;
