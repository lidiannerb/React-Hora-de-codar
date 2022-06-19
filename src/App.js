import React from 'react';
import "./App.css";
import NovaLista from './components/NovaLista';

function App() {
  //abaixo simulamos um arquivo externo com dados em array
  const meusItens = ["React", "Vue", "Angular"]

  return (
    <div className="App">
      <h1>Renderização de Listas</h1> 
      <NovaLista itens={meusItens}/>
      <NovaLista itens={[]}/>
    </div>
  );
}

export default App;
