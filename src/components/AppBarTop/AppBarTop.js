import { Link } from "react-router-dom";
import styles from "./AppBarTop.module.css";
import Container from "../Container/Container";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const AppBarTop = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Link to="/">
          <Logo />
        </Link>
      </Container>
    </header>
  );
};

export default AppBarTop;
