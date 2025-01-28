import { IoIosArrowDown } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addMessage} from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {

  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector(store => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(addMessage({
        name: generateRandomName(),
        message: generateRandomMessage(),
      }))
    }, 1000);

    return () => clearInterval(i);
  }, [])

  return (
    <div className="relative ml-4 border border-gray-500 w-full h-[400px] rounded-lg">
        <div className="absolute p-2 px-4 w-full flex gap-3 items-center border-b border-gray-500 text-lg bg-white rounded-t-lg">
            Top Chat
            <IoIosArrowDown />
        </div>
        <div className="p-2 mt-12 h-[308px] overflow-y-scroll flex flex-col-reverse">
            {chatMessages.map((c, index) => (
              <ChatMessage key={index} name={c.name} message={c.message}/>
            ))}
        </div>
        <form className="border-t border-gray-500 p-1 px-5 flex items-center justify-between gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name: "Tushar Srivastava",
            message: liveMessage,
          }))

          setLiveMessage("");
        }}>
            <input type="text" placeholder="Chat..." value={liveMessage} 
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
            className="bg-gray-200 rounded-full p-1 px-3 w-full italic"/>
            <button className="cursor-pointer"><IoMdSend className="text-2xl"/></button>
        </form>
    </div>
  )
}

export default LiveChat