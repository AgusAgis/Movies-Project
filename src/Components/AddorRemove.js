
// console.log(tempMovieInFavs);


const  AddorRemove =e=>{
    const favMovies = localStorage.getItem('favs');
    let tempMovieInFavs;
    if(favMovies === null){
      tempMovieInFavs = [];
    } else{
      tempMovieInFavs = JSON.parse(favMovies)
    }

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
    const movieData ={
        imgURL, title, overview,
        id:btn.dataset.movieId
    } 
    let movieIsInArray = tempMovieInFavs.find(oneMovie =>{
        return oneMovie.id === movieData.id
    });
    if(!movieIsInArray){
        tempMovieInFavs.push(movieData);
        localStorage.setItem('favs', JSON.stringify(tempMovieInFavs));
        console.log("Film added")
    } else {
       let moviesLeft = tempMovieInFavs.filter(oneMovie =>{
           return oneMovie.id !== movieData.id
       }) 
      
       localStorage.setItem('favs', JSON.stringify(moviesLeft))
       console.log("Film deleted")
       window.location.reload()
    }
    
    
    
}
export default AddorRemove;