import { FaUserCircle } from "react-icons/fa";

const Comment = ({data}) => {

  const {name, text, replies} = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2 w-fit">
      <FaUserCircle className="text-[24px] text-blue-400 flex-shrink-0"/>
      <div className="px-3">
        <h4 className="font-semibold text-gray-600">{name}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Comment