import {Link} from "react-router-dom";

import Buscador from "./Buscador";

function Header(){
    return(
        <header>
            <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className="navbar-brand" style={{color:"white"}}> Home</Link> 
                    </li>
                    <li className="nav-item">
                      <Link to="/Listado" className="navbar-brand" style={{color:"white"}}>All movies</Link>  
                    </li>
                    <li className="nav-item">
                      <Link to="/favorites"className="navbar-brand" style={{color:"white"}}>Favorites</Link>  
                    </li>
                </ul>
                <Buscador />
              </div>
            </nav>
        </header>
    )
}
export default Header;