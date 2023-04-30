import React from "react"
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.js"
import Api from "./pages/api/api.js"
import Error from "./pages/notfound/error.js";
function App()
{
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/api" element={<Api/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  )
}
export default App