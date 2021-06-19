import { Link } from "react-router-dom";
import styles from "./AppBarBottom.module.css";
import Container from "../Container/Container";
import { ReactComponent as AddIcon } from "../../assets/add-icon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/settings-icon.svg";

const AppBarTop = () => {
  return (
    <div className={styles["bar-bottom"]}>
      <Container>
        <div className={styles["bar-bottom-buttons-wrapper"]}>
          <Link to="/edit">
            <AddIcon />
          </Link>
          <Link to="/settings">
            <SettingsIcon />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AppBarTop;
