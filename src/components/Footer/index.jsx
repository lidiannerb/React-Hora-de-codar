import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <ul className={styles.social_list}>
        <li><BsLinkedin /></li>
        <li><BsInstagram /></li>
        <li><ImFacebook2 /></li>
        
      </ul>
    </footer>
  );
}
 
export default Footer;