import { FunctionComponent } from "react";
import Title from "@/components/Title";
import UserInfo from "@/features/UserInfo";
import UserActivities from "@/features/UserActivities";
import Materials from "@/features/Materials";
import Recommendations from "@/features/Recommendations";
import Sidebar from "@/features/Sidebar";
import styles from "./App.module.scss";

const App: FunctionComponent = () => {
  return (
    <>
      <Title text="Навигатор по развитию" />
      <main className={styles.row}>
        <div className={styles.wrapper}>
          <UserInfo />
          <UserActivities />
          <Recommendations />
          <Materials />
        </div>
        <Sidebar />
      </main>
    </>
  );
};

export default App;
