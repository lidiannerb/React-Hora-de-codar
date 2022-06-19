import Button from "../Button";

const Evento = () => {

  const meuEvento = () => {
    console.log("Ativando primeiro evento");
  }

  const segundoEvento = () => {
    console.log("Ativando segundo evento");
  }

  return ( 
    <>
      <p>Clique para disparar um evento</p>
      <Button event={meuEvento} text="primeiro evento"/> 
      <Button event={segundoEvento} text="segundo evento" />
    </>
  );
}
 
export default Evento;

// meuEvento não pode ser invocada() aqui, senão será chamada assim que renderiza o botão e não no click 
// nesse caso o componente pai (evento) enviou a função para o filho(button) por props