import DeliveryList from "../../../components/delivery/deliveryList";

function DeliverySummerySection({ today_deliveries }) {
  return (
    <div
      className="row-span-3 d-card place-content-start"
      style={{ height: "75%" }}
    >
      <div className="grid grid-rows-8 h-full">
        <div className="bg-slate-300 rounded-lg p-1 row-span-1">Delivery</div>
        <div className="row-span-6">
          {today_deliveries ? (
            today_deliveries.map((ele) => {
              return (
                <DeliveryList
                  delivery_no={ele.delivery_no}
                  do_date={ele.do_date}
                  customer_name={ele.customer_name}
                  sales_person={ele.sales_person}
                  key={ele.id}
                />
              );
            })
          ) : (
            <p className="text-center h-full place-content-center text-slate-400">
              No deliveries
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeliverySummerySection;
