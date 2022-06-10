import {useState, useEffect} from "react";
import { Link, Navigate} from 'react-router-dom';
import AddorRemove from "./AddorRemove";

function Favs () {
let token = sessionStorage.getItem("token");
   const [favorites, setFavorites] = useState([]);

    useEffect(() => {
    const favsInLocal = localStorage.getItem('favs');
    if(favsInLocal !== null){
        const favsArray = JSON.parse(favsInLocal);
        console.log(favsArray)
        setFavorites(favsArray)        // window.location.reload()
    } 
    },[])
    

 return(
     <>
      { !token && <Navigate to="/"/>}
     <h2>Favorites Section</h2>
     <div className='row'>

    {favorites.map((oneMovie,idx)=> {
    return(
    <div className='col-3'style={{border:"1px solid black"}} key={idx}>
    <div className="card my-4" >
    <img src={oneMovie.imgURL} className="card-img-top" alt="..."/>
    <button 
    className="favourite-btn"
    onClick={AddorRemove}
    data-movie-id={oneMovie.id}
    >🖤</button>
    <div className="card-body">
    <h5 className="card-title">{oneMovie.title}</h5>
    <p className="card-text">{oneMovie.overview.substring(0,100)}...</p>
    <Link to={`/detail?movieID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
    </div>
    </div>
    </div>
    )
    })
    }
    </div>
    </>
    )
}

export default Favs;