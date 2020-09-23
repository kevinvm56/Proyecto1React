import React, { useState } from 'react';
import Name from './components/Name';
import list from './components/List';
import './App.css';

function App() {
  const [names,setNames]=useState([]);
  const [name,setName]=useState('');

  function addName(){
    if(name!='' && names.indexOf(name)===-1){
      const newNames= [name,...names];
      setNames(newNames);
      setName('');
    }
  }
  function removeName(name){
    const newNames = names.filter(n =>n !==name);
    setNames(newNames);
  }

  function editName(name){
    //Index
    const index = names.indexOf(name);
    setName(names[index]);

    /*const newName=names.filter(n=> n ===name);
    alert(newNames);
    document.f1.i1.value=newNames;*/
  }
 
  return (
    <div className="App">

      <form name="f1">
        <input value={name} id="i1" placeholder="Ingresa un Nombre" onChange={e => setName(e.target.value)}/>
        <button type="reset" onClick={() => addName()}>Añadir</button>
        <list 
        data={names}
        removeName={removeName}
        editName={editName}
        />
      </form>
    </div>
  );
}

export default App;
