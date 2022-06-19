import React from 'react';
import { useState } from "react";
import "./App.css";
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {

  const [nome, setNome] = useState();

  return (
    <div className="App">
      <h1>State Lift</h1> 
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome}/>
      {nome}
    </div>
  );
}

export default App;

//Aqui estamos usando o State Lift, pois temos um fim para SeuNome e outro para Saudacao
 
