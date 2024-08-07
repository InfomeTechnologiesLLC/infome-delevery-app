import DetailItem from "./elements/detailItem";

function CustomerDetailsSection(props) {
  console.log(props.details);

  return (
    <div className={props.className}>
      <div className="items grid grid-cols-2">
        <DetailItem
          headerName={"Customer Name"}
          content={props.details.customer_details.name}
        />
        <DetailItem
          headerName={"Sales Person"}
          content={props.details.customer_details}
        />
        <DetailItem
          headerName={"Address"}
          content={props.details.customer_details.address}
        />
        <DetailItem
          headerName={"Email"}
          content={props.details.customer_details.email}
        />
        <DetailItem
          headerName={"Mobile"}
          content={props.details.customer_details.mobile}
        />
      </div>
    </div>
  );
}

export default CustomerDetailsSection;
