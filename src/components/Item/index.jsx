import PropTypes from 'prop-types';

const Item = ({ marca, ano_lancamento}) => {
  return ( 
    <>
      <li>
        {marca} - {ano_lancamento}
      </li>
    </>
   );
}

Item.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number
};

//colocando um valor Default, o required já não funciona pois é preenchido pelo default

Item.defaultProps ={
  marca: "Faltou a marca",
  ano_lancamento: 0,
}
 
export default Item;