const NovaLista = ({itens}) => {
  return ( 
    <>
      <h3>Lista de coisas boas</h3>

      {itens.length > 0 ? (
        itens.map((item, index) => (
          <p key={index}>{item}</p> 
        ))
        ) : (
            <p>Não há itens na lista</p>            
        )
      }
    </>
  );
}
 
export default NovaLista;

//no map estamos colocando o atributo key e imprimindo o index, apenas para nao dar erro no React, 
//a Key serve pro React saber qual componente deve ser atualizado quando tiver alguma mudança, é como se 
// ele exigisse um Id único referenciando os itens