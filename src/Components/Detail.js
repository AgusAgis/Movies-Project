import { useEffect, useState } from 'react';
import { Navigate} from 'react-router-dom';
import axios from 'axios';

function Detail(){
    let token =  sessionStorage.getItem("token");

    let query = new URLSearchParams(window.location.search);
    let movieID = query.get("movieID");

    const [movie, setMovie] = useState(null);

    useEffect(() =>{
    const endPoint =`https://api.themoviedb.org/3/movie/${movieID}?api_key=59a57bf993e9ba97bc1ed47880ea2f0a&language=en-US`;
    axios.get(endPoint).then(response =>{
        const movieData = response.data;
        setMovie(movieData);
    }) 
    .catch(error =>{
        console.log(error,"There has been an error")
    })
    }, [movieID])

    return(
        <>
        { !token && <Navigate to="/"/>}
        {!movie && <p>Loading ...</p>}
        { movie && 
       <>
        <h2  style ={{marginTop:"30px"}}>Title:  {movie.title}</h2>
        <div className= "row" style={{backgroundColor:"black", height: "50%"}}>
            <div className='col-4' >
             <img style ={{marginTop:"30px"}} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt="movie poster" />
            </div>
            <div className='col-8'>
               
                <h5 style ={{marginTop:"70px",fontSize: "135%", color:"white"}}>Review:</h5>
                <p  style={{fontSize: "135%",color:"white"}}>{movie.overview}</p>
                <h5 style ={{marginTop:"30px",fontSize: "125%",color:"white"}}>Rating:  { movie.vote_average}</h5>
                <h5 style ={{marginTop:"30px",fontSize: "125%",color:"white"}}>Genres:</h5>
                <ul  style ={{fontSize: "100%",color:"white"}}>
                    {movie.genres.map(oneGenre =>
                    <li key={oneGenre.id}>{oneGenre.name}</li>)}
                </ul>
            </div>
        </div>
        </>
         }º
    </>
    )
}
export default Detail;