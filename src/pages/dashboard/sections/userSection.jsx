function UserSection({ data }) {
  return (
    <div className="d-card grid grid-cols-3 bg-gradient-to-r from-red-700 to-red-500">
      <div className=" col-span-2 text-white ">
        <div className="grid grid-rows-3 h-full">
          <div className="text-lg">Naser</div>
          <div className="text-sm">Delivery</div>
          <div className="text-sm">Admin</div>
        </div>
      </div>
      <img
        src="/icon/profile-icon.jpg"
        alt="icon"
        className="rounded-full h-20 w-20 place-self-center"
      />
    </div>
  );
}

export default UserSection;
