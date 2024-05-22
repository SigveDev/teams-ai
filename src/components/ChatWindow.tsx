import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import { useEffect, useRef, useState } from "react";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextSenderCorrelation } from "../assets/types/textSenderCorrelation";
import { SenderEnum } from "../assets/enums/senderEnum";
import BouncingDotsLoader from "./loadingComponent/loadingText";

const ChatWindow = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<TextSenderCorrelation[]>([]);

  const messagesViewRef = useRef<HTMLDivElement>(null);

  const openai = createOpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY as string,
  });

  const sendMessage = async (message: string) => {
    setLoading(true);
    setMessages((prev) => [
      ...prev,
      {
        sender: SenderEnum.USER,
        text: message,
      },
    ]);
    const result = await generateText({
      model: openai.chat("gpt-3.5-turbo"),
      prompt: message,
    });
    setMessages((prev) => [
      ...prev,
      {
        sender: SenderEnum.AI,
        text: result.text,
      },
    ]);
    setLoading(false);
  };

  useEffect(() => {
    if (messagesViewRef.current) {
      messagesViewRef.current.scrollTop = messagesViewRef.current.scrollHeight;
    }

    if (messages.length !== 0) {
      localStorage.setItem("messages", JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    const messages = localStorage.getItem("messages");
    if (messages) {
      setMessages(JSON.parse(messages));
    }
  }, []);

  return (
    <div className="flex flex-col-reverse w-full h-[calc(100%_-_4rem)] px-6">
      <div className="flex items-center justify-center w-full gap-4 p-6 h-fit border-t border-[#d2d5d6]">
        <input
          type="text"
          placeholder="Type a new message"
          className="p-3 text-[#7d8386] text-sm rounded-md outline outline-1 outline-[#dee2ea] border-b-2 border-[#5d5fcb] h-11 drop-shadow-sm w-[80%] bg-[#fafafa]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage(message);
              setMessage("");
            }
          }}
        />
        <button
          onClick={() => {
            sendMessage(message);
            setMessage("");
          }}
        >
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="text-[#7d8386] hover:text-black"
            size="lg"
          />
        </button>
      </div>
      <div
        className="flex flex-col gap-2 pb-4 overflow-x-hidden overflow-y-scroll"
        ref={messagesViewRef}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 ${
              msg.sender === SenderEnum.USER ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 max-w-[80%] rounded-lg ${
                msg.sender === SenderEnum.USER
                  ? "bg-[#5d5fcb] text-white"
                  : "bg-[#f2f6f9] text-[#7d8386]"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-center justify-start gap-4">
            <BouncingDotsLoader />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
