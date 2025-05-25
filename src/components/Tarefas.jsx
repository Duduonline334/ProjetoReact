import '../styles/tarefas.css'

function Tarefas(props) { 
    return(
        <div>
            <ul className="Tarefas">
                {props.lista.map((tarefa) => (
                    <li  onClick={() => props.altera(tarefa.id)} key={tarefa.id}>
                        <p> {tarefa.nome} </p>
                        <div>
                            {tarefa.completa ? "COMPLETA" : "INCOMPLETA"}
                        </div>
                    </li>
                ))}
            </ul>           
        </div>
    )
}

export default Tarefas