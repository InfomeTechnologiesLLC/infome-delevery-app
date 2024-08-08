import { Dialog } from "primereact/dialog";
import DetailItem from "./detailItem";

function ProductDetailsDailog(props) {
  return (
    <Dialog
      header={"Product Detail"}
      visible={props.productDialog.active}
      maximizable
      style={{ width: "97vw" }}
      onHide={() => {
        if (!props.productDialog.active) return;
        props.setProductDialog({ active: false, data: {} });
      }}
    >
      <div className="m-0 grid grid-rows-5 ">
        <div className="row-span-2">
          {/* <span className="font-bold">
            Product Name : <span className="font-normal">{"MASNOOR"}</span>
          </span> */}
          <DetailItem
            headerName={"Product Name"}
            content={props.productDialog.data.name}
          />
          <DetailItem
            headerName={"Qty"}
            content={props.productDialog.data.qty}
          />
        </div>
        <div className="row-span-3 my-1">
          <span className="font-bold">Description</span>
          <span
            dangerouslySetInnerHTML={{ __html: props.productDialog.data.desc }}
          ></span>
        </div>
      </div>
    </Dialog>
  );
}

export default ProductDetailsDailog;
