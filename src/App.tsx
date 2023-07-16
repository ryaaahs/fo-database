import Home from "./Pages/Home/Home_Page"
import Items from "./Pages/Items/Items_Page"
import Enemies from "./Pages/Enemies/Enemies_Page"
import Maps from "./Pages/Maps/Maps_Page"
import Enemies_Info from "./Pages/Enemies_Info/Enemies_Info_Page"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/Maps", Component: Maps },
  { path: "/Items", Component: Items },
  { path: "/Enemies", 
    children: [
      { index: true, Component: Enemies },
      { path: ":id", Component: Enemies_Info }
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
