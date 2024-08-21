import logo from "../assets/logo.png"
import { useState } from "react"
import {auth} from "../services/firebaseConfig.js"
import {signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth"
import { useNavigate} from "react-router-dom/dist"
import { Link } from "react-router-dom/dist"




export default function Login(){
    const [User,setUser] = useState("")
    const [Email,setEmail] = useState("")
    const [Pass,setPass] = useState("")
    const [Login,setLogin] = useState(false)


    const navigate = useNavigate()


    function login(){
       signInWithEmailAndPassword(auth,Email.target.value,Pass.target.value).then(data=>{
            console.log(data,"authData")
            return navigate("/home")
           
        }).catch(erro => {
            alert("Erro ao efetuar o login     Erro: "+erro)
        })


    }




   
    return(
        <div className="login">
            <div  className="login">
                <h1>Login</h1>
                <input type="text" placeholder="Email" onChange={k => setEmail(k)}/><br/>
                <input type="password" placeholder="Senha" onChange={k => setPass(k) }/><br/>
                <button onClick={login}>Logar</button>
                <br></br>
                <Link to="/Cadastro">Fazer Cadastro</Link>
                <br></br>
                <Link to="/Redefinir">Redefinir senha</Link>
            </div>
           


        </div>
    )
}






