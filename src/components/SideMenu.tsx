import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCalendar,
  faFile,
} from "@fortawesome/free-regular-svg-icons";
import {
  faMessage,
  faUsers,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

const SideMenu = () => {
  return (
    <nav className="col-start-1 col-span-1 row-[2_/_span_15] bg-[#e4edf4] border border-[#dee2ea] flex items-center flex-col gap-2">
      <div className="w-[90%] flex justify-center items-center">
        <button className="flex flex-col items-center gap-2 p-2 text-[#5d5f60] hover:text-black">
          <FontAwesomeIcon icon={faBell} size="lg" />
          <span className="text-xs font-medium">Activity</span>
        </button>
      </div>
      <div className="w-[90%] flex justify-center items-center border-l-[3px] border-[#5d5fcb]">
        <button className="flex flex-col items-center gap-2 p-2 text-[#5d5fcb]">
          <FontAwesomeIcon icon={faMessage} size="lg" />
          <span className="text-xs font-medium">Chat</span>
        </button>
      </div>
      <div className="w-[90%] flex justify-center items-center">
        <button className="flex flex-col items-center gap-2 p-2 text-[#5d5f60] hover:text-black">
          <FontAwesomeIcon icon={faUsers} size="lg" />
          <span className="text-xs font-medium">Teams</span>
        </button>
      </div>
      <div className="w-[90%] flex justify-center items-center">
        <button className="flex flex-col items-center gap-2 p-2 text-[#5d5f60] hover:text-black">
          <FontAwesomeIcon icon={faCalendar} size="lg" />
          <span className="text-xs font-medium">Calender</span>
        </button>
      </div>
      <div className="w-[90%] flex justify-center items-center">
        <button className="flex flex-col items-center gap-2 p-2 text-[#5d5f60] hover:text-black">
          <FontAwesomeIcon icon={faFile} size="lg" />
          <span className="text-xs font-medium">Files</span>
        </button>
      </div>
      <div className="w-[90%] flex justify-center items-center">
        <button className="flex flex-col items-center gap-2 p-2 text-[#5d5f60] hover:text-black mt-4">
          <FontAwesomeIcon icon={faEllipsis} size="lg" />
        </button>
      </div>
    </nav>
  );
};

export default SideMenu;
