export interface TodoType {
    id: string
    text: string
    date: string
    isDone: boolean
}

export type TodoAction = 
    |{
        type: "add",
        payload: {
        text:string
        }
    }
    |{
        type:"delete" | "update",
        payload:{
            id:string
        }
    };
