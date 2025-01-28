import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const location = useLocation();

  if (!isMenuOpen && location.pathname === '/')
    return (
      <div className="mt-15 ml-3 absolute">
        <div className="flex-col">
          <div className="text-[10px] flex-col place-items-center py-4 hover:bg-gray-100 rounded-lg cursor-pointer">
            <IoHomeOutline className="text-xl" />
            Home
          </div>
          <div className="text-[10px] flex-col place-items-center py-4 hover:bg-gray-100 rounded-lg cursor-pointer">
            <SiYoutubeshorts className="text-xl" />
            Shorts
          </div>
          <div className="text-[10px] flex-col place-items-center py-4 hover:bg-gray-100 rounded-lg cursor-pointer">
            <MdOutlineSubscriptions className="text-xl" />
            Subscriptions
          </div>
          <div className="text-[10px] flex-col place-items-center py-4 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaRegUserCircle className="text-xl" />
            You
          </div>
        </div>
      </div>
    );

    else if(!isMenuOpen && location.pathname !== '/') return null;
    else if (isMenuOpen) 
      return (
    <div className="absolute w-60 h-122 overflow-y-scroll no-scrollbar bg-white z-50 mt-16">
      <ul>
        <li className="font-semibold py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Shorts</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Subscriptions</li>
      </ul>
      <h1 className="font-semibold py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">You &gt;</h1>
      <ul>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">History</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Playlists</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Your videos</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Watch later</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Liked videos</li>
      </ul>
      <h1 className="font-semibold py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Explore</h1>
      <ul>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Trending</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Shopping</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Music</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Movies</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Live</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Gaming</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">News</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Sports</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Courses</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Fashion & Beauty</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Podcasts</li>
      </ul>
      <h1 className="font-semibold py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">More from YouTube</h1>
      <ul>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">YouTube Premium</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">YouTube Studio</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">YouTube Music</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">YouTube Kids</li>
      </ul>
      <ul>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Settings</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Report History</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Help</li>
        <li className="py-3 text-center hover:bg-gray-100 rounded-lg cursor-pointer">Send Feedback</li>
      </ul>
    </div>
  );
};

export default Sidebar;
