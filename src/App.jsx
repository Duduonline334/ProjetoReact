import { useState } from 'react'
import './App.css'
import Tarefas from './components/Tarefas'
import Adiciona from './components/Adiciona'
import Hover from './components/Hover'

function App() {
  const [lista, setLista] = useState([
    {
      id: 1,
      nome: "Fazer um site",
      completa: true
    },
    {
      id: 2,
      nome: "Roubar um banco",
      completa: false
    },
    {
      id: 3,
      nome: "Fazer uma apresentação muito foda",
      completa: false
    }
  ])

  function AdicionaTarefa(nome) {
    const novaLista = {
      id: lista.length + 1,
      nome: nome,
      completa: false
    }

    setLista([...lista, novaLista])
  }

  function AlteraCompleta(idTarefa){
    
    const novaLista = lista.map((lista) =>{
      if (lista.id == idTarefa){
        return {...lista, completa: !lista.completa}
      }else{
        return lista
      } 
    })
    setLista(novaLista)
  }

  return (
    <div>
      <Hover/>
      <Adiciona adicionar={AdicionaTarefa}/>
      <Tarefas lista={lista} altera = {AlteraCompleta}/>
    </div>
  )
}

export default App
