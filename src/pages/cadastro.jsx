import logo from "../assets/logo.png"
import { useState } from "react"
import {auth} from "../services/firebaseConfig.js"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate} from "react-router-dom/dist"
import { Link } from "react-router-dom/dist"



export default function Cadastro(){
    const [User,setUser] = useState("")
    const [Email,setEmail] = useState("")
    const [Pass,setPass] = useState("")
    const [Login,setLogin] = useState(false)

    const navigate = useNavigate()

    function login(){
        createUserWithEmailAndPassword(auth,Email.target.value,Pass.target.value).then(data=>{
            console.log(data,"authData")
            return navigate("/home")
            
        }).catch(erro => {
            console.log(erro)
        })

    }


    
    return(
        <div className="login">
            <div  className="login">
                <h1>Cadastro</h1>
                <input type="text" placeholder="Email" onChange={k => setEmail(k)}/><br/>
                <input type="password" placeholder="Senha" onChange={k => setPass(k) }/><br/>
                <button onClick={login}>Cadastre-se</button>
                <br></br>
                <Link to="/login">Fazer login</Link>
            </div>
            

        </div>
    )
}



