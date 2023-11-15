import { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoReducer } from "./TodoReducer";
import { TodoList } from "./TodoList";
import * as types from "./types"


const initialState = [
    {
        id:  new Date().getTime(),
        description: 'Hacer los challenges',
        done: false,
        changes: 0

    }
]

export const TodoApp = () =>{
    const [todos, dispatch] = useReducer(TodoReducer,initialState);

    const handleNewTodo = (todo) => {
        
        const action = {
            type: types.CREATE_TODO,
            payload: todo
        }
        dispatch(action)
        
    }

    const substracTodo = (todo) =>{
        const action = {
            type: types.DELETE_TODO,
            payload: todo
        }
        dispatch (action)

    }

    const toggleTodo = (todo) =>{
        const action = {
            type: types.TOGGLE_TODO,
            payload: todo
        }
        dispatch (action)
    }

    return (
        <>
            <h1>TodoApp: 10,  <small>pendientes:2</small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} 
                         onDeleteTodo={substracTodo}
                         onToggleTodo={toggleTodo}
                    />
                </div>

                <div className="col-5">
                    <TodoAdd onNewTodo={handleNewTodo}  
                    />
                </div>
                
            </div>
        </>
    )
}