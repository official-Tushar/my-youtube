import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-290 m-2">
      <ButtonList/>
      <div className="overflow-y-scroll h-105">
        <VideoContainer/>
      </div>
    </div>
  )
}

export default MainContainer;