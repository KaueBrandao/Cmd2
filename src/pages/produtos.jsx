import { useEffect, useState} from 'react'
import '../App.css'
import {fireStoreDB} from "../services/firebaseConfig.js"
import { addDoc, collection, getDocs, getFirestore, doc , deleteDoc} from 'firebase/firestore'
import { useNavigate} from "react-router-dom/dist"
import { Link } from "react-router-dom/dist"





export default function Produtos() {
    const [name, setName] = useState("")
    const [valor, setValor] = useState(null)
    const [cursos, setCursos] = useState([])

    const navigate = useNavigate()

    //const db = getFirestore(firebase)
    const useCollectionRef = collection(fireStoreDB, "Cursos")

   useEffect(() =>{
        const getCursos = async () => {
            const data = await getDocs(useCollectionRef)
            setCursos(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getCursos()
    }, [])

    async function deletarCurso(id) {
        const cursoDoc = doc(fireStoreDB, "Cursos", id)
        await deleteDoc(cursoDoc)    }

    return (
        <div className='produtos'>
            <input type="text" placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder='Valor' value={valor} onChange={(e) => setValor(e.target.value)}/>

            <button onClick={ async () => {
                const user = await addDoc(useCollectionRef,{
                    name,
                    valor,
                })
                console.log(user)
                return navigate("/home")
            }}>criar produto</button>

            <ul>
                {cursos.map((curso) => {
                    return (
                        <div key={curso.id} className='produtosItem'>
                            <li><p>Nome do Curso: {curso.name}</p></li>
                            <li>Valor do Curso: {curso.valor}</li>
                            <button onClick={() => {
                                deletarCurso(curso.id)
                                return navigate("/home")
                                }}>Deletar</button>
                        </div>
                    )
                })}
            </ul>
            
        </div>
    )
}

