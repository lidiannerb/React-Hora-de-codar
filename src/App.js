import React from 'react';
import "./App.css";
import Frase from "./components/Frase";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import List from './components/List';


function App() {

  return (
    <div className="App">
      <Frase/>
      <Frase/>
      <SayMyName nome= "Lidiane" />
      <Pessoa 
        nome= "Lidianne"
        idade= "40"
        profissao = "Desenvolvedora de Software"
        foto= "https://avatars.githubusercontent.com/u/83047245?v=4"
      />
      <List />
    </div>
  );
}

export default App;
