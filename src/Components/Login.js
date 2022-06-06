import axios  from 'axios'
import swAlert from "@sweetalert/with-react"
function Login() {
   
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
        localStorage.setItem("token", tokenRecibido)
        })
    }
return(
    <>
    <h2>Formulario de LogIn</h2>
        <form onSubmit={submitHandler}>
        <label><span>Correo electrónico:</span>
        <br />
        <input type="text" name="email"></input>
        </label>
        <br />
        <label> <span>Contraseña:</span>   
        <br />
        <input type="password" name="password"></input>
        <br />
        </label>
        <br />
        <button type="submit">Ingresar</button> 
       
    </form>
    </>
)
}
export default Login;