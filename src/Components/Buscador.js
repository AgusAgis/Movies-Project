import { useNavigate } from "react-router-dom";
import swAlert from "@sweetalert/with-react"

function Buscador(){
    const navigate = useNavigate();
    const submitHandler = e =>{
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim(); //valor del input match name=keyword //trim quito espacios vacios antes y después de la palabra
   
    if(keyword.length === 0){
        swAlert(<h5>You must write a movie title</h5>)
    } else if(keyword.length < 4 ){
        swAlert(<h5>You must write at least four letters</h5>)
    } else{
    e.currentTarget.keyword.value = "";
    navigate(`/results?keyword=${keyword}`)
    }
}

return(
    <form className="d-flex align-items-center" onSubmit={submitHandler}>
        <label className='form-label mb-0 mx-2'>
            <input className="form-control" type="text" name="keyword"
            placeholder="Search a movie ..."/>
        </label>
        <button className='btn btn-success' type="submit">Buscar</button> 
    </form>
)
}
export default Buscador;