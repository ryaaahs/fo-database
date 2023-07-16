import Home from "./Pages/Home/Home_Page"
import Items from "./Pages/Items/Items_Page"
import Enemies from "./Pages/Enemies/Enemies_Page"
import Maps from "./Pages/Maps/Maps_Page"
import Enemies_Info_Page from "./Pages/Enemies_Info/Enemies_Info_Page"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/Maps" element={<Maps />}></Route>
        <Route path="/Items" element={<Items />}></Route>
        <Route path="/Enemies" element={<Enemies />}></Route>
        <Route path="/Enemies/:id" element={<Enemies_Info_Page />}></Route>
      </Routes>
    </>
  )
}

export default App
