import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router";

const WatchPage = () => {

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu())
  }, []);
  return (
    <div className="px-5">
      <iframe className="rounded-xl"
      width="700"
      height="350"
      src={"https://www.youtube.com/embed/" +  searchParams.get("v")}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowfullscreen></iframe>
    </div>
  )
}

export default WatchPage