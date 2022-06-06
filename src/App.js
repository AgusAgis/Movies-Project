import{Routes, Route} from "react-router-dom"
import Login from "./Components/Login"
import Listado from "./Components/Listado"
function App() {
  return (
    <Routes>
    <Route exact path ="/" element={<Login />} />
    <Route path ="/listado" element={<Listado />} />
    </Routes>
  );
}

export default App;
