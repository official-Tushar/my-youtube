import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import {YOUTUBE_SEARCH_API} from "../utils/constants"
import { cacheResults } from "../utils/searchSlice";

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) =>store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    // Debouncing
    const timer = setTimeout(() =>
      {
        if(searchCache[searchQuery]){
          setSuggestions(searchCache[searchQuery]);
        }
        else{
          getSearchSuggestions()
        }
      }, 200);

      return () => {
        clearTimeout(timer); 
      };
    }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery]: json[1],
    }))
  }
  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col top-0 fixed w-79/80 bg-white z-10">
      {/* hamburger + logo */}
      <div className="flex gap-5 p-5 col-span-2">
        <img onClick={()=>toggleMenuHandler()} className="h-6 w-7 cursor-pointer" alt="menu" src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=512"/>
        <img className="h-5 cursor-pointer" alt="youtube-logo" src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"/>
      </div>
      {/* Search bar */}
      <div className="col-span-8 w-3/4 p-2 pb-4 relative">
        <div className="grid grid-flow-col">
          <input className="col-span-11 border border-gray-400 rounded-l-full pl-4 p-2 italic
          focus:outline-none focus:ring-0.5 focus:ring-blue-700 focus:border-blue-700" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            type="text" 
            placeholder="Search"/>
          <button className="col-span-1 border border-gray-400 rounded-r-full justify-items-center bg-gray-100">
            <CiSearch className="text-3xl"/>
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-40 left-4 mt-1 w-6/7 bg-white rounded-lg shadow-md shadow-gray-500 py-1">
          <ul>
            {suggestions.map((s) => (
              <li key={s} className="my-1 py-1 px-5 flex items-center gap-x-2 
              hover:bg-gray-100 cursor-default">
                <CiSearch className="text-xl"/>{s}
              </li>
              ))}
            </ul>
          </div>
          )}
        </div>
      {/* User profile */}
      <div className="col-span-2 p-2 pr-5 justify-items-end">
        <img className="h-8" alt="user" src="https://cdn-icons-png.flaticon.com/512/9385/9385289.png"/>
      </div>
    </div>
  )
}

export default Head