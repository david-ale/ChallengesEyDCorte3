import { useState } from "react"

export const TodoAdd = ({onNewTodo}) => {
    const [description,setDescription] = useState('');
    const onFormSubmit = (event) =>{
        event.preventDefault ()
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
            changes: 0
        }
      
        onNewTodo(newTodo);
        setDescription('')
    
    }
    const handleDescriptionChange = (event)=>{
        setDescription(event.target.value)
    }
    return (
        <form onSubmit={(event)=> onFormSubmit(event)}>
            <input
                type= 'text'
                placeholder="Tarea"
                className="form-control"
                value={description}
                onChange={handleDescriptionChange}
            />
            <button
                type = "submit"
                className="btn btn-outline-primary mt-1 "    
            >
                Agregar
            </button>
        </form >
    )
}