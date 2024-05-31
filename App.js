import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Module/Navbar/Navbar";
import Users from "./Module/CRUD/component/Users";
import About from "./Module/CRUD/component/About";
import Nodata from "./Module/CRUD/component/Nodata";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route index path="/" element={<Users/>}/>
      <Route index path="/about" element={<About/>}/>
      <Route index path="*" element={<Nodata/>}/>
    </Routes>
    </>
  );
}

export default App;
