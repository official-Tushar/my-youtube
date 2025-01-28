import { Outlet } from "react-router";

const Body = () => {
  return (
    <div className='flex'>
      <Outlet/>
    </div>
  )
}

export default Body;