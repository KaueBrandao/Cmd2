import { useState } from "react"
import {auth} from "../services/firebaseConfig.js"
import {sendPasswordResetEmail} from "firebase/auth"
import { useNavigate} from "react-router-dom/dist"
import { Link } from "react-router-dom/dist"


export default function Redefirnir(){
    const [Email,setEmail] = useState("")


    const navigate = useNavigate()

    function redefinir(){
       sendPasswordResetEmail(auth,Email.target.value).then(data=>{
            alert("Email enviado com sucesso email:"+Email.target.value)
            return navigate("/login")
            
        }).catch(erro => {
            alert("Erro ao enviar email     Erro: "+erro)
        })

    }


    
    return(
        <div className="login">
            <div  className="login">
                <h1>Redefinir senha</h1>
                <input type="text" placeholder="Email" onChange={k => setEmail(k)}/><br/>
                <button onClick={redefinir}>Enviar</button>
                <br></br>
                <Link to="/login">Fazer login</Link>
            </div>
            

        </div>
    )
}



