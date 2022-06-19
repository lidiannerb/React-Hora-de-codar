const SeuNome = ({ setNome }) => {
  return (
    <div>
      <p>Digite o seu nome</p>
      <input
        type="text"
        placeholder="Qual é o seu nome?"
        onChange={(e) => setNome(e.target.value)}
      />
    </div>
  );
};

export default SeuNome;

//state lift: centralizar o state no componente pai (app, nesse caso), e alterar o 
// state no componente filho (SeuNome)