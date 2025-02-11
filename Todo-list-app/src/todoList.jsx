import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todo,setTodo]=useState([{task:"sample task" ,id:uuidv4(),isDone:false}])
    let [newTodo,setNewTodo]=useState("")

    let updatenewTodo=(event)=>{
       setNewTodo(event.target.value)
       
    }

    let addTask=()=>{
        setTodo(()=>{
            return [...todo,{task:newTodo,id:uuidv4(),isDone:false}]});
        setNewTodo("");
    }

    let deleteTask=(id)=>{
        setTodo((prevTodos)=>todo.filter((prevTodos)=>prevTodos.id!=id)) 
    }
    let makeDone=(id)=>{
        setTodo((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id==id){
                    return {...todo,isDone:true};
                }
                else{
                    return todo;
                }
            })
        )
    }


    return(
        <div>
            <input type="text" placeholder="Add a task" value={newTodo} onChange={updatenewTodo} /><br></br>
            <br />
            <button onClick={addTask}>AddTask</button>

            <hr />
            <p>Todo Tasks</p>
            <ul>
            {todo.map((todo)=>(
              <li key={todo.id}><span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>&nbsp;&nbsp;&nbsp;
              <button onClick={()=>deleteTask(todo.id)}>Delete</button>&nbsp;&nbsp;&nbsp;
              <button onClick={()=>makeDone(todo.id)}>Mark as Done</button></li>
            ))}
            <br />
            </ul>
            


        </div>
    )
}