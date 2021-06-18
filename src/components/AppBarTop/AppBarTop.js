import styles from "./AppBarTop.module.css";

const AppBarTop = ({ children }) => {
  return <header className={styles.header}>{children}</header>;
};

export default AppBarTop;
