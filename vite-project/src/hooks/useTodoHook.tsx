import { useReducer } from 'react'
import {TodoType, TodoAction} from '../types/types'
import { v4 as uuidv4 } from 'uuid'


const todosReducer = (state:TodoType[], action:TodoAction): TodoType[] => {
    switch (action.type) {
      case "add":
        return[
          {
            id:uuidv4(),
            text: action.payload.text,
            date: new Date().toLocaleDateString(),
            isDone: false
          },
          ...state
        ]
      
      case "delete":
        return state.filter(oneTodo=>oneTodo.id != action.payload.id )
  
      case "update":
        return state.map(oneTodo=>{
          if (oneTodo.id === action.payload.id ){
            return oneTodo.isDone ? {...oneTodo, isDone:false} : {...oneTodo, isDone:true}
          }
          return oneTodo
        })
  
      
      default: 
      return state
    }
}

const INITIAL_STATE: TodoType[] = [
    { 
      id: uuidv4(),
      text: "plase live your life now!!!",
      date: new Date().toLocaleDateString(),
      isDone: false,
    },
    { 
      id: uuidv4(),
      text: "dont be afraid to fail!!!",
      date: new Date().toLocaleDateString(),
      isDone: false
    },
    { 
      id: uuidv4(),
      text: "im ok because im alive",
      date: new Date().toLocaleDateString(),
      isDone: false
    }
  ]

export const useTodoHook = () =>  useReducer(todosReducer, INITIAL_STATE)
  