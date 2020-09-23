import React, {useState} from 'react';

function Name(props){
    const [marked,setMarked] = useState(false);
    function displayName(name){
        alert(name);
    }

    return(
        <div style={{ backgroundColor:  marked===true  ? "red" : "transparent"}}>
            <span>{props.value}</span>
            <button onClick={() => displayName(props.value)}>Mostrar</button>
        </div>
    )
}