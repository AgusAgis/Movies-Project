import { Link, Navigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from 'axios';
import swAlert from "@sweetalert/with-react"
import '../Css/app.css';
import AddorRemove from './AddorRemove';


function Listado(props){

    function paginado(e,number){
        e.preventDefault()
        setNumberPage(number) 
        console.log(number,"hola")
       }
       function paginadoNext(e){
        e.preventDefault()   
        if(numberpage +1 < 500){
        setNumberPage(numberpage + 1) 
        }
       
       }
       function paginadoPrev(e){
        e.preventDefault()
        if(numberpage -1 >0){
            setNumberPage(numberpage - 1) 
        }
       }
    
    let token = sessionStorage.getItem("token");
    console.log(props);
    
    const [moviesList, setMoviesList] = useState([])
    const [numberpage, setNumberPage] =  useState(1)

    useEffect(()=>{
        const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=59a57bf993e9ba97bc1ed47880ea2f0a&language=en-US&page=${numberpage}`
        axios.get(endPoint)
        .then(response =>{
            const apiData =response.data;
            setMoviesList(apiData.results) //actualizo el estado 
        })
        .catch(error =>{
            swAlert(<h2>There has been a problem, 
            <br></br>try later</h2>)
        })
    },[numberpage])
   
    return(
        <>
        { !token && <Navigate to="/"/>}

        <div className='row' style={{backgroundColor:"black"}} >

        {moviesList.map((oneMovie,idx)=> {
        return(
        <div className='col-3'style={{border:"1px solid black"}} key={idx}>
        <div className="card my-4" >
        <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..."/>
        <button 
        className="favourite-btn"
        onClick={AddorRemove}
        data-movie-id={oneMovie.id} 
        > ⭐ </button>
        
       <div className="card-body">
        <h5 className="card-title">{oneMovie.title.substring(0,20)}</h5>
        <p className="card-text">{oneMovie.overview.substring(0,100)}...</p>
        <Link to={`/detail?movieID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
  </div>
</div>
</div>
)
})
}
</div>
<nav aria-label="Page navigation example  ">
  <ul className="pagination justify-content-center">
    <li  className="page-item">
      <a onClick={(e) => paginadoPrev(e)} className="page-link bg-dark">Previous</a>
    </li>
    <li className="page-item "><a  onClick={(e) => paginado(e,1)} className="page-link bg-dark" href="#">{numberpage}</a></li>
    <li className="page-item"><a  onClick={(e) => paginado(e,2)} className="page-link bg-dark" href="#">{numberpage+1}</a></li>
    <li className="page-item"><a  onClick={(e) => paginado(e,3)} className="page-link bg-dark" href="#">{numberpage+2}</a></li>
    <li className="page-item"><a  onClick={(e) => paginado(e,4)} className="page-link bg-dark" href="#">{numberpage+3}</a></li>
    <li className="page-item"><a  onClick={(e) => paginado(e,5)} className="page-link bg-dark" href="#">{numberpage+4}</a></li>
    <li className="page-item">
      <a onClick={(e) => paginadoNext(e)}className="page-link bg-dark" href="#">Next</a>
    </li>
  </ul>
</nav>
</>
)
}
export default Listado