import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="relative grid grid-flow-row">
      <div className="row-span-2">
        <ButtonList/>
      </div>
      <div className=" relative mt-30">
        <VideoContainer/>
      </div>
    </div>
  )
}

export default MainContainer;