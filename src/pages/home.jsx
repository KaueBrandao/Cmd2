import { useState} from 'react'
import '../App.css'
import destaque from "../assets/destaque.jpg"




export default function Home() {
 


  return (
    <div className='home'>
        <div className='destaque'>
            <img src={destaque} alt='' />
        </div>


        <div className='parceiros'>
            <h2>Parceiros</h2>
            <p>Credibilidade perante mais de 15.000 empresas e milhões de alunos em todo o mundo</p>
        </div>


        <div className="cursos">
            <h2>Cursos</h2>
        </div>
    </div>
  )
}


