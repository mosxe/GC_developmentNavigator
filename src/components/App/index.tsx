import { FunctionComponent } from "react";
import Title from "components/Title";
import Employee from "components/Employee";
import Recommendations from "components/Recommendations";
import Materials from "components/Materials";
import styles from "./styles.module.scss";

const App: FunctionComponent = () => {
  return (
    <>
      <Title text="Навигатор по развитию" />
      <main className={styles.wrapper}>
        <Employee />
        <Recommendations />
        <Materials />
      </main>
    </>
  );
};

export default App;
