import { useState } from "react";
import '../styles/adiciona.css'

function Adiciona( {adicionar}) {
    
    const [nome, setNome] = useState("")

    return(
        <div className="main">
            <h3>Adicione uma tarefa</h3>
            <input placeholder="Digite a terefa..." type="text" value={nome} onChange={(event) => setNome(event.target.value)}/>
            <button onClick={() => {adicionar(nome); setNome("")}}> Adiciona </button>
        </div>
    )

}

export default Adiciona;