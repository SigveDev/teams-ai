import { faPhone, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatWindow from "./ChatWindow";

const ChatView = () => {
  return (
    <main className="col-[7_/_span_14] row-[2_/_span_15]">
      <div className="w-full h-16 border-b border-[#dee2ea] px-4 flex justify-between items-center">
        <span className="flex items-center justify-center h-full gap-3">
          <img
            src="/images/ola-nordmann.png"
            alt="avatar"
            className="flex items-center justify-center w-10 h-10 my-auto rounded-full"
          />
          <h2 className="text-xl font-bold">Ola Nordmann</h2>
          <button className="h-full w-fit border-b-[3px] pt-[3px] border-[#5d5fcb] ml-2">
            Chat
          </button>
        </span>
        <span className="flex">
          <button className="flex items-center gap-2 p-2 aspect-square text-[#5d5f60] rounded-l-md hover:text-black bg-white border-t border-l border-b border-[#d0d2d3]">
            <FontAwesomeIcon icon={faVideo} />
          </button>
          <button className="flex items-center gap-2 p-2 aspect-square text-[#5d5f60] rounded-r-md hover:text-black bg-white border border-[#d0d2d3]">
            <FontAwesomeIcon icon={faPhone} />
          </button>
        </span>
      </div>
      <ChatWindow />
    </main>
  );
};

export default ChatView;
