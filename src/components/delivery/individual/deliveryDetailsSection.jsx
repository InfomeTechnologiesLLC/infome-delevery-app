import DetailItem from "./elements/detailItem";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import ProductDetailsDailog from "./elements/productDetailsDialog";
function DeliveryDetailsSection(props) {
  const [DeliveryProduct, setDeliveryProduct] = useState([
    { code: "1", name: "Mansoor", des: "HELLo", qty: 1 },
  ]);

  //product dialog
  const [ProductDialog, setProductDialog] = useState({
    active: false,
    data: {},
  });

  const fetchDeliveryProductDetails = (e, map_id) => {
    let parent = e.target.closest(".delivery-product-table-list-item");
    let data = {
      name: parent.querySelector("#name").innerText,
      desc: parent.querySelector("#desc").innerHTML,
      qty: parent.querySelector("#qty").innerText,
    };

    setProductDialog({ active: true, data: data });
  };

  return (
    <div className={props.className}>
      <div className="row-span-2">
        <div className="items grid grid-cols-3">
          <DetailItem
            headerName={"D-Number"}
            content={props.details.delivery_no}
          />
          <DetailItem headerName={"D-Date"} content={props.details.do_date} />
          <DetailItem headerName={"Invoice Date"} content={"Mansoor"} />
          <DetailItem headerName={"No Packages"} content={"3"} />
          <DetailItem headerName={"Weight"} content={"2"} />
          <DetailItem headerName={"Measurement"} content={"1"} />
        </div>
      </div>

      <div className="delivery-product-table row-span-6 grid grid-rows-10">
        <div className="w-full grid grid-cols-6 delivery-product-table-head">
          <div className="col-span-2  delivery-product-table-header text-xs ">
            Product
          </div>
          <div className="col-span-3  delivery-product-table-header text-xs ">
            Description
          </div>
          <div className=" delivery-product-table-header text-xs text-center ">
            Qty
          </div>
        </div>
        <div className="delivery-product-table-list-items w-full mt-1 row-span-9 h-auto overflow-y-auto">
          {props.details.products.map((product) => (
            <div
              className="delivery-product-table-list-item grid grid-cols-6 min-h-10 max-h-20"
              key={uuid4()}
              onClick={(e) => fetchDeliveryProductDetails(e, product.map_id)}
            >
              <div className="col-span-2 text-xs" id="name">
                {product.name}
              </div>
              <div
                className="col-span-3 text-xs truncate"
                id="desc"
                dangerouslySetInnerHTML={{ __html: product.desc }}
              ></div>
              <div className="text-center text-xs" id="qty">
                {product.qty}
              </div>
            </div>
          ))}
        </div>
        {/* <DataTable value={DeliveryProduct}>
          <Column field="code" header="id"></Column>
          <Column field="name" header="Product"></Column>
          <Column field="category" header="Description"></Column>
          <Column field="quantity" header="Qty"></Column>
        </DataTable> */}
        <ProductDetailsDailog
          productDialog={ProductDialog}
          setProductDialog={setProductDialog}
        />
      </div>
    </div>
  );
}

export default DeliveryDetailsSection;
