import {Link} from "react-router-dom";

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
                      <Link to="/Listado" className="navbar-brand" style={{color:"white"}}>Listado</Link>  
                    </li>
                    <li className="nav-item">
                      <Link to="/Contacto"className="navbar-brand" style={{color:"white"}}>Contacto</Link>  
                    </li>
                </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header;