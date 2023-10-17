import {TodoType} from '../types/types'


interface Props {
    todoList: TodoType[],
    deleteTodo:(id:string)=>void
}
export const Todo = ({todoList, deleteTodo}:Props) => {
  if(todoList.length ===0 ){
    return <h2>Nothing to show!!!!</h2>
  }
  return (
    <div>
        <ul>
        {todoList.map(oneTodo=>{
          return (
            <li key={oneTodo.id}>
              <h3>{oneTodo.text}</h3>
              <p>{oneTodo.date}</p>
              <strong>ID= {oneTodo.id}</strong>
              <button onClick={()=>deleteTodo(oneTodo.id)}>Delete</button>
            </li>
          )
        })}
       </ul>
    </div>
  )
}


