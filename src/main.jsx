import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import ErroPage from './router/erroPage.jsx'
import Cadastro from './pages/cadastro.jsx'
import Redefirnir from './pages/reset.jsx'
import Produtos from './pages/produtos.jsx'




const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement: <ErroPage/>,
    children:[
    {
    path: "/home",
    element: <Home/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/Cadastro",
      element: <Cadastro/>,
    },
    {
      path: "/Redefinir",
      element: <Redefirnir/>,
    },
    {
      path: "/Produtos",
      element: <Produtos/>,
    },
    ]
  }
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
