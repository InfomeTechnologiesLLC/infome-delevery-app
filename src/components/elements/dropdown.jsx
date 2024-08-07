import { RiArrowDropDownLine } from "@remixicon/react";
import { useState } from "react";

function IconDropdown() {
  let dropList;
  const [OpenOptions, setOpenOptions] = useState(false);

  function onLabelClick() {
    // document.body.append();
    setOpenOptions(!OpenOptions);
  }

  return (
    <>
      <div className="w-full icon-dropdown-label h-10" onClick={onLabelClick}>
        <div className="icon-dropdown-label text-center grid-rows-2 grid h-full">
          ✅
          <RiArrowDropDownLine className=" text-center place-self-center" />
        </div>

        {OpenOptions && (
          <div className="relative">
            <ul className="icon-dropdown-options">
              <li className="dropdown-list-option text-sm text-center">
                🕛<p className="text-xs">Pending</p>
              </li>
              <li className="dropdown-list-option text-center">
                ⌛<p className="text-xs">Progress</p>
              </li>
              <li className="dropdown-list-option text-center">
                ✅<p className="text-xs">Done</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default IconDropdown;
