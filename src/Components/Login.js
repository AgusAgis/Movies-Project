import axios  from 'axios'
import swAlert from "@sweetalert/with-react"
import { useNavigate, Navigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
  
    const submitHandler = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(!email ||!password){
              swAlert({
                title: "Los campos no pueden estar vacios",
                icon: "warning",
              });
           return 
       }
   
        else if(email  && !regexEmail.test(email)){
            swAlert({
                title: "Debes escribir una dirección de correo válida",
                icon: "error",
              });
      
        return 
        }
        else if(email !== "challenge@alkemy.org" || password !=="react"){
            swAlert({
                title: "Credenciales invalidas",
                icon: "error",
              });
     
            return
        }
        
        
        axios
        .post("http://challenge-react.alkemy.org",{email, password})
        .then(res => {
            swAlert({
                title: "¡Perfecto!",
                text:"Ingresaste correctamente",
                icon: "success",
              });
        const tokenRecibido = res.data.token;
        sessionStorage.setItem("token", tokenRecibido);
        navigate("/Listado")
        })
    }

    let token = sessionStorage.getItem("token") ;
    
return(
    <>
    { token && <Navigate to="/Listado" />}
    <div className='row'>
    <div className='col-6 offset-3'>
       <h2>Formulario de LogIn</h2>
        <form onSubmit={submitHandler}>
        <label className='form-label d-block mt-2'>
            <span>Correo electrónico:</span>
        <br />
        <input className= "form-control" type="text" name="email"></input>
        </label>
        <br />
        <label className='form-label d-block mt-2'>
            <span>Contraseña:</span>   
        <br />
        <input className="form-control" type="password" name="password"></input>
        <br />
        </label>
        <br />
        <button className='btn btn-success mt-2' type="submit">Ingresar</button> 
    </form>
    </div>
    </div>
    </>
)
}
export default Login;