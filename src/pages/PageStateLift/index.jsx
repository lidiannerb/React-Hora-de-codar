import React from 'react';
import { useState } from "react";
// import "./App.css";
import SeuNome from '../../components/SeuNome';
import Saudacao from '../../components/Saudacao';

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

// State Lift: compartilhar o estato de um state para que cada componente faça o seu papel

// Aqui estamos usando o State Lift, pois temos um fim para SeuNome e outro para Saudacao
// Estamos centralizando o state nome no componente pai (PageStateLift)para que ele seja usado no componente 
// filho (saudacao).

// Estamos centralizando o setNome no componente pai (PageStateLift)para que ele seja usado no componente 
// filho (SeuNome).O state está sendo alterado do componente filho.