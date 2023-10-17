import './App.css'
import {Todo} from './components/Todo'
import {Form} from './components/Form'
import { useTodoHook } from './hooks/useTodoHook'



function App() {

  const [todos, dispatch]= useTodoHook()

  const createTodoHandler = (newTodoText:string):void => {
    dispatch({
      type:"add",
      payload:{
        text: newTodoText
      }
    })
  }

  const deleteTodoHandler = (id:string):void => {
    dispatch({
      type:"delete",
      payload: {id}
    })
  }
  
  return (
    <>
      <div>
        <h2>Todo List Typescript</h2>
        <Form createTodo={createTodoHandler} />
        <Todo todoList={todos} deleteTodo={deleteTodoHandler}/>
      </div>
      
    </>
  )
}

export default App
