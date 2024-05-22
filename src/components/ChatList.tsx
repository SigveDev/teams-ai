import { useState, useEffect } from "react";
import axios from "axios";
import { RandomUser } from "../assets/types/randomUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

const randomResponses = [
  "Yepp, ser bra ut!",
  "Helt flott",
  "Hvordan går det med oppgaven?",
  "Hva tenker du om dette?",
  "You: Fakks sliter",
  "You: Jeg har ikke peiling",
  "You: Helt ærlig da",
  "BANGER!!!!",
  "Joiner minecraft etterpå eller?",
  "Har du lastet det ned?",
  "You: Hva er planen?",
  "backer maccern etterpå eller?",
  "You: Legit",
  "You: ;)",
];

const randomTime = [
  "08:47",
  "10:12",
  "11:34",
  "13:45",
  "15:22",
  "16:55",
  "18:01",
  "19:24",
  "09:02",
  "10:34",
  "11:56",
  "13:11",
  "14:44",
  "16:02",
];

const ChatList = () => {
  const [chatList, setChatList] = useState<RandomUser>();
  const pinnedAmount = 4;

  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=15&nat=NO"
        );
        const data = await response.data;
        setChatList(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChatList();
  }, []);

  return (
    <aside className="flex flex-col col-start-2 col-span-5 row-[2_/_span_15] bg-[#f2f6f9] border-r border-[#dee2ea] drop-shadow-[-1px_0_1px_rgba(0,0,0,0.05)]">
      <div className="w-full h-16 border-b border-[#dee2ea] p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Chat</h2>
        <span className="flex gap-1">
          <button className="flex items-center gap-2 p-2 text-[#7d8386] hover:text-black">
            <FontAwesomeIcon icon={faGripLines} />
          </button>
          <button className="flex items-center gap-2 p-2 aspect-square text-[#5d5f60] rounded-md hover:text-black bg-white border border-[#d0d2d3]">
            <FontAwesomeIcon icon={faVideo} />
          </button>
          <button className="flex items-center gap-2 p-2 aspect-square text-[#5d5f60] rounded-md hover:text-black bg-white border border-[#d0d2d3]">
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </span>
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-2 overflow-x-hidden overflow-y-scroll grow">
        <article className="w-[95%] h-fit flex flex-col gap-2 mt-4">
          <figure className="flex items-center justify-start w-full ml-4">
            <p className="text-[#7d8386]">Pinned</p>
          </figure>
          {chatList &&
            chatList.results.map((user, index: number) => {
              if (index + 1 > pinnedAmount) return null;
              return (
                <button
                  className="flex items-start justify-center w-full gap-2 p-1 pl-4 text-left rounded-md"
                  key={user.name.first + " " + user.name.last}
                >
                  <img
                    src={user.picture.thumbnail}
                    alt="avatar"
                    className="flex items-center justify-center w-10 h-10 my-auto rounded-full"
                  />
                  <div className="relative flex flex-col h-full grow">
                    <h5 className="text-[#48494a] m-0 p-0">
                      {user.name.first + " " + user.name.last}
                    </h5>
                    <p className="p-0 m-0 text-sm text-[#7d8386]">
                      {
                        randomResponses[
                          Math.floor(Math.random() * randomResponses.length)
                        ]
                      }
                    </p>
                    <p className="p-0 m-0 absolute top-0 right-1 text-[#7d8386]">
                      {
                        randomTime[
                          Math.floor(Math.random() * randomTime.length)
                        ]
                      }
                    </p>
                  </div>
                </button>
              );
            })}
        </article>
        <article className="w-[95%] h-fit flex flex-col gap-2">
          <figure className="flex items-center justify-start w-full ml-4">
            <p className="text-[#7d8386]">Recent</p>
          </figure>
          <button className="flex w-full justify-center items-start gap-2 pl-4 text-left bg-white border border-[#d0d2d3] rounded-md p-1">
            <img
              src="/images/ola-nordmann.png"
              alt="avatar"
              className="flex items-center justify-center w-10 h-10 my-auto rounded-full"
            />
            <div className="relative flex flex-col h-full grow">
              <h5 className="text-[#48494a] m-0 p-0">Ola Nordmann</h5>
              <p className="p-0 m-0 text-sm text-[#7d8386]">...</p>
              <p className="p-0 m-0 absolute top-0 right-1 text-[#7d8386]">
                {new Date().toLocaleTimeString("nb-NO", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </button>
          {chatList &&
            chatList.results.map((user, index: number) => {
              if (index + 1 < pinnedAmount) return null;
              return (
                <button
                  className="flex items-start justify-center w-full gap-2 p-1 pl-4 text-left rounded-md"
                  key={user.name.first + " " + user.name.last}
                >
                  <img
                    src={user.picture.thumbnail}
                    alt="avatar"
                    className="flex items-center justify-center w-10 h-10 my-auto rounded-full"
                  />
                  <div className="relative flex flex-col h-full grow">
                    <h5 className="text-[#48494a] m-0 p-0">
                      {user.name.first + " " + user.name.last}
                    </h5>
                    <p className="p-0 m-0 text-sm text-[#7d8386]">
                      {
                        randomResponses[
                          Math.floor(Math.random() * randomResponses.length)
                        ]
                      }
                    </p>
                    <p className="p-0 m-0 absolute top-0 right-1 text-[#7d8386]">
                      {
                        randomTime[
                          Math.floor(Math.random() * randomTime.length)
                        ]
                      }
                    </p>
                  </div>
                </button>
              );
            })}
        </article>
      </div>
    </aside>
  );
};

export default ChatList;
