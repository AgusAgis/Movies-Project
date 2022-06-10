import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swAlert from "@sweetalert/with-react"
import axios from 'axios';
import rollo from "../Images/img.jpg"

import { useSearchParams } from "react-router-dom" 


function Results(){
    //  let query = new URLSearchParams(window.location.search);
    //  let keyword = query.get('keyword');

    let [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get("keyword")
   
    const [moviesResults, setMoviesResults] = useState([]);

       useEffect(() => {
           
        const endPoint =`https://api.themoviedb.org/3/search/movie?api_key=59a57bf993e9ba97bc1ed47880ea2f0a&language=en-US&query=${keyword}`;
        
        axios.get(endPoint).then(response => {
           const moviesArray = response.data.results;
           if(moviesArray.length === 0){
            swAlert("Film not found")
            const ayuda =" https://api.themoviedb.org/3/discover/movie?api_key=59a57bf993e9ba97bc1ed47880ea2f0a&language=en-US&page=1";
        
        axios.get(ayuda).then(response => {
           const allMoviesArray = response.data.results;

            return setMoviesResults(allMoviesArray)
           })}

           setMoviesResults(moviesArray)
        }) 
        .catch(error => console.log(error, "There has been a problem"))
        
    },[keyword]);
    
   
    return(
        <>
            <h2>You have searched for: <em>{keyword}</em></h2>
            {moviesResults.length === 0 && <h3>There are no results</h3>}
            <div className='row'>
            {
            moviesResults.map((oneMovie,idx)=> {
            return(
                    <div className='col-4'style={{border:"1px solid black"}} key={idx}>
                    <div className="card my-4" >
                    {oneMovie.poster_path === null ? <img src={rollo} alt=".." height={600}/> : <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}className="card-img-top" alt="..."/>}
                    <div className="card-body">
                    <h5 className="card-title">{oneMovie.title}</h5>
                    <p className="card-text">{oneMovie.overview.substring(0,100)}</p>
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
export default Results;

// Swal.fire({
// title:
// text:
// html:
// icon:
// confirmButtonText:
// footer:
// width:
// padding:
// background:
// grow:
// backdrop:
// timer:
// timerProgressBar:
// toast:
// position:
// allowOutsideClick:
// allowEscapeKey:
// allowEnterKey:
// stopKeydownPropagation:

// input:
// inputPlaceholder:
// inputValue:
// inputOptions:

//  customClass:
// 	container:
// 	popup:
// 	header:
// 	title:
// 	closeButton:
// 	icon:
// 	image:
// 	content:
// 	input:
// 	actions:
// 	confirmButton:
// 	cancelButton:
// 	footer:

// showConfirmButton:
// confirmButtonColor:
// confirmButtonAriaLabel:

// showCancelButton:
// cancelButtonText:
// cancelButtonColor:
// cancelButtonAriaLabel:

// buttonsStyling:
// showCloseButton:
// closeButtonAriaLabel:

// imageUrl:
// imageWidth:
// imageHeight:
// imageAlt:
// });