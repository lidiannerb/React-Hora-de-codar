import React from 'react';
import { useState } from "react";
import "./App.css";
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

const PageStateLift = () => {

  const [nome, setNome] = useState();

  return (
    <div className="state-lift">
      <h1>State Lift</h1> 
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome}/>
      {nome}
    </div>
  );
}

export default PageStateLift;

//Aqui estamos usando o State Lift, pois temos um fim para SeuNome e outro para Saudacao
//Esta página não está sendo renderizada, foi copiada do App.js apenas para guardar o aprendizado de state lift