import { Switch } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faEllipsis,
  faX,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <header className="col-start-0 col-[span_20] row-start-0 row-span-1 flex items-center justify-between px-4 bg-[#e4edf4] border-b border-[#dee2ea]">
      <span className="flex gap-8 ml-2">
        <img
          src="/images/icon.png"
          alt="logo"
          className="w-6 h-6 cursor-pointer"
        />
        <span className="flex items-center justify-center gap-3 font-medium">
          <span className="text-[#5d5f60] text-sm">New Teams</span>
          <Switch
            id="custom-switch-component"
            ripple={false}
            className="h-full w-full checked:bg-[#5c5fc8]"
            containerProps={{
              className: "w-11 h-6",
            }}
            circleProps={{
              className: "before:hidden left-0.5 border-none",
            }}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
            defaultChecked={true}
          />
        </span>
      </span>
      <span className="flex gap-2">
        <span className="flex gap-1">
          <button className="flex items-center gap-2 p-2 text-[#7d8386] rounded-full hover:text-black">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="flex items-center gap-2 p-2 text-[#7d8386] rounded-full hover:text-black">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </span>
        <input
          type="text"
          placeholder="Search"
          className="p-2 text-[#7d8386] rounded-md border border-[#dee2ea] h-9 drop-shadow-sm w-96"
        />
      </span>
      <span className="flex gap-2">
        <span className="flex gap">
          <button className="flex items-center gap-2 p-2 text-[#5d5f60] rounded-full hover:text-black">
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
          <button className="flex items-center gap-2 p-2 text-[#5d5f60] rounded-full">
            <img
              src="/images/ola-nordmann.png"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
          </button>
        </span>
        <button className="flex items-center gap-2 p-2 text-[#5d5f60] rounded-full hover:text-black">
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <button className="flex items-center gap-2 p-2 text-[#5d5f60] rounded-full hover:text-black">
          <FontAwesomeIcon icon={faSquare} />
        </button>
        <button className="flex items-center gap-2 p-2 text-[#5d5f60] rounded-full hover:text-black">
          <FontAwesomeIcon icon={faX} />
        </button>
      </span>
    </header>
  );
};

export default Header;
