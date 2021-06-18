import styles from "./HomePage.module.css";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";

const HomePage = () => {
  return (
    <section>
      <Container>
        <div className={styles["home-wrapper"]}>
          <Title />
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
