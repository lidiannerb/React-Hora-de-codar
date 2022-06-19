const Saudacao = ({nome}) => {

  const gerarSaudacao = (algumNome) => {
    return `olá, ${algumNome}, tudo bem?`
  }

  return (
    <>
      {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
  );
}
 
export default Saudacao;

//colocamos o if (&&) para que a saudação apareça apenas quando houver um nome no input 
// do componente SeuNome