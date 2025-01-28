import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Sidebar from "./components/Sidebar";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
    path: "/",
    element: (
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-1"><Sidebar /></div>
        <div className="col-span-11">
          <div className="grid-cols-3">
            <MainContainer />
          </div>
        </div>
      </div>
      )
    },
    {
      path: "watch",
      element: (
      <div>
        <Sidebar/>
        <WatchPage/>
      </div>
        )
      }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div className="grid grid-flow-row h-screen overflow-y-scroll overflow-x-hidden">
        <div><Head/></div>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>

  )
}

export default App
