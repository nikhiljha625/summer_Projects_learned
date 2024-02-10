import React, { useContext, useState } from 'react';
import { UserStateReducerContext } from './userContext';
import { deleteUser, updateUser } from './userClient';

// Pure Functions -> No state of own

const UserEntry = (props) => {

    // Snapshots of states
    const [editing, setEditing] = useState(false);


    const dispatch= useContext(UserStateReducerContext)

    
    // const [count, setCount] = useState(0);

    // console.log(count);
    const changeEditState = () => {

        if(editing){
            updateUser(props.id,{
                name:props.name,
                college: props.college
            },dispatch)
        }
        // batching -> store the update and do after all functions are called
        setEditing(!editing);
        
        // setCount(count=>count+1);
        // setCount(count=>count+1);
        // setCount(count=>count+1);

        // console.log(count);
        // console.log(editing);
    }

    const onChange = (e, property) => {
        dispatch({
            "type": "edit",
            "name": props.name,
            "property": property,
            "newValue": e.target.value
        })
    }

    return (
        <li>
            {editing ? <input type="text" value={props.name} 
            onChange={(e)=>onChange(e,"name")}/> : <span>{props.name}</span>}
            &nbsp; &nbsp; &nbsp; 
            {editing ? <input type="text" value={props.college} 
            onChange={(e) => onChange(e, "college")}/> : <span>{props.college}</span>}
            &nbsp; &nbsp; &nbsp; 
            <span>{props.grad_year}</span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={changeEditState}>{editing ? "Save Entry" : "Edit Entry"}</button>
            <button onClick={() => deleteUser(props.id,dispatch)}>Delete entry</button>

        </li>
    )
}

export default React.memo(UserEntry)

/*
const UserEntry = (props)=>{
    
    const [editing, SetEditing] = useState(false)


    const changeEditingState = ()=>{
        SetEditing(!editing);
    }

    return (
        <li>
            {editing? <input type="text" value={props.data} />:<span>{props.data}</span>}
            &nbsp; &nbsp; &nbsp;
            <button onClick={changeEditingState}>{editing? "Save Entry":"Edit Entry"}</button>
            <button onClick={()=> props.onDelete(props.data)}>Delete Entry</button>

         </li>
    )
} 
*/ 