import Home from "./Pages/Home"
import Items from "./Pages/Items"
import Enemies from "./Pages/Enemies"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/Items" element={<Items />}></Route>
        <Route path="/Enemies" element={<Enemies />}></Route>
      </Routes>
    </>
  )
}

export default App
