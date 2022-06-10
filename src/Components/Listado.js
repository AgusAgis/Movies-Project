import { Link, Navigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from 'axios';
import swAlert from "@sweetalert/with-react"


function Listado(){
    let token = sessionStorage.getItem("token");

    const [moviesList, setMoviesList] = useState([])

    useEffect(()=>{
        const endPoint = " https://api.themoviedb.org/3/discover/movie?api_key=59a57bf993e9ba97bc1ed47880ea2f0a&language=en-US&page=1"
        axios.get(endPoint)
        .then(response =>{
            const apiData =response.data;
            setMoviesList(apiData.results) //actualizo el estado 
        })
        .catch(error =>{
            swAlert(<h2>There has been a problem, 
            <br></br>try later</h2>)
        })
    },[setMoviesList])
   

    return(
        <>
        { !token && <Navigate to="/"/>}

        <div className='row'>

        {moviesList.map((oneMovie,idx)=> {
        return(
        <div className='col-3'style={{border:"1px solid black"}} key={idx}>
        <div className="card my-4" >
        <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..."/>
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
export default Listado