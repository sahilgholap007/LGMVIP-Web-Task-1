import { Stack} from "@chakra-ui/react";
import React from "react";
import TodoComponent from "./TodoComponent";
import {db} from"../firebaseConfig"
import { collection, addDoc} from "firebase/firestore"

export default function Card() {
    const [newTodo, setNewTodo] = React.useState("");

    const usersCollectionRef = collection(db, "Todos");
    
    const addTodo = async() => {
        await addDoc(usersCollectionRef, {
            todo: newTodo,
        })
        .then(()=>{
            document.getElementById("input").value = "";
        })
    }
    

    return (
        <div className="card">
            <div className="card-container">
            <h1>Todo List</h1>
            <Stack w="100%" h="100%">
                <input placeholder='Enter Todo' id="input" backgroundColor="white" marginBottom="10px"  onChange={(e)=>{setNewTodo(e.target.value)}}/>
                <button onClick={addTodo} >Add Todos</button>
                <TodoComponent/>
            </Stack>
            </div>
        </div>
    )
}