//Libraries
import{Routes, Route} from "react-router-dom"
//Components
import Login from "./Components/Login"
import Listado from "./Components/Listado"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Detail from "./Components/Detail"
import Results from "./Components/Results"
//Styles
import "./Css/bootstrap.min.css";

function App() {
  return (
    <>
    <Header />
    <div className="container mt-3">
    <Routes>
      
      <Route exact path ="/" element={<Login />} />
      <Route path ="/listado" element={<Listado />} />
      <Route path ="/detail" element={<Detail />} />
      <Route path ="/results" element={<Results />} />
      
    </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
