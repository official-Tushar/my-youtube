import { useSelector } from "react-redux";
import { Link } from "react-router";
import SidebarItems from "./SidebarItems";
// import { IoHomeOutline } from "react-icons/io5";

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if(!isMenuOpen) return (
    <div>
      <ul>
        <li className="text-xs p-4"><SidebarItems/></li>
        <li className="text-xs p-4">Shorts</li>
        <li className="text-xs p-4">Subscriptions</li>
        <li className="text-xs p-4">You</li>
      </ul>
    </div>
  )
  return (
    <div className="absolute w-60 h-121 overflow-y-scroll no-scrollbar bg-white">
      <ul className="">
        <li className="font-semibold p-2">
        <Link to={"/"}>Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-semibold">You &gt;</h1>
      <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Your videos</li>
        <li>Watch later</li>
        <li>Liked videos</li>
      </ul>
      <h1 className="font-semibold">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Courses</li>
        <li>Fashion & Beauty</li>
        <li>Podcasts</li>
      </ul>
      <h1 className="font-semibold">More from YouTube</h1>
      <ul>
        <li>YouTube Premium</li>
        <li>YouTube Studio</li>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>
      </ul>
      <ul>
        <li>Settings</li>
        <li>Report History</li>
        <li>Help</li>
        <li>Send Feedback</li>
      </ul>
    </div>
  )
}

export default Sidebar;