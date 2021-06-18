import styles from "./Title.module.css";

const Title = () => {
  return (
    <h1 className={styles.title}>
      Welcome to <span className={styles.name}>Banda Space</span>
    </h1>
  );
};

export default Title;
