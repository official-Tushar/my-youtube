import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex gap-2 mx-1 my-2">
        <div>
            <FaUserCircle className="text-xl text-purple-400"/>
        </div>
        <div className="text-sm">
            <span className="font-semibold text-gray-500">{name} &nbsp; </span>
            <span className="text-xs">{message}</span>
        </div>
    </div>
  )
}

export default ChatMessage