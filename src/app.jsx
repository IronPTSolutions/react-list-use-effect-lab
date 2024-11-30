import { Navbar } from "./components/ui"
import Home from "./pages/home"
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
      
      <Routes> 
        <Route path ="/" element ={<Home/>} />
      </Routes>
    </>
  )
}

export default App
