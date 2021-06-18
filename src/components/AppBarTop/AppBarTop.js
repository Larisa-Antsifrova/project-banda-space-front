import styles from "./AppBarTop.module.css";
import Container from "../Container/Container";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const AppBarTop = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Logo />
      </Container>
    </header>
  );
};

export default AppBarTop;
