import styles from "./HomePage.module.css";
import Container from "../../components/Container/Container";

const HomePage = () => {
  return (
    <section>
      <Container>
        <div className={styles["home-wraper"]}>
          <h1>Welcome to Banda Space!</h1>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
