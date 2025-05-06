import { FunctionComponent } from "react";
import Title from "components/Title";
import Employee from "components/Employee";
import Recommendations from "components/Recommendations";
import Materials from "components/Materials";
import Sidebar from "components/Sidebar";
import styles from "./styles.module.scss";

const App: FunctionComponent = () => {
  return (
    <div className={styles.width}>
      <Title text="Навигатор по развитию" />
      <main className={styles.row}>
        <div className={styles.wrapper}>
          <Employee />
          <Recommendations />
          <Materials />
        </div>
        <Sidebar />
      </main>
    </div>
  );
};

export default App;
