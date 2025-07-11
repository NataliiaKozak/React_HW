import { Link } from 'react-router-dom'
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/login">Log In</Link>
      <Link to="/register">Log Up</Link>
      <Link to="/user">Account</Link>
    </nav>
  );
};

export default Navigation;
