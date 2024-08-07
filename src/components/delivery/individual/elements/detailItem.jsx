function DetailItem(props) {
  return (
    <div className="grid my-1">
      <span className="text-xs text-slate-500 ">{props.headerName}</span>
      <span className="text-sm truncate ">{props.content}</span>
    </div>
  );
}

export default DetailItem;
