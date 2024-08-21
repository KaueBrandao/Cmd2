import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import Login from "../pages/login"
import Produtos from "../pages/produtos"
import "../App.css"

export default function Header(){
    return(
        <div className="header">
        <div className="logo">
            <img className="logo" src={logo} alt=""/>
            <h2>Cdemy</h2>
            <input className="pesquisa"  placeholder="Pesquisar por qualquer coisa"></input>
            <a >Categorias</a>
        </div>

        <ul className='menu'>
            <li><Link to="/home">Inicio</Link></li>
            <li><a>Cursos</a></li>
            <li><Link className="produtos" to="/produtos"><a>Produtos</a></Link></li>
            <li><img className="carrinho" src="https://cdn-icons-png.flaticon.com/512/126/126510.png" alt=""  /></li>
            <li><Link className="cadastrar" to="/login"><a>Cadastrar</a></Link></li>
        </ul>
    </div>
    )
}