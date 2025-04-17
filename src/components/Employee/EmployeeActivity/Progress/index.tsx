import { FunctionComponent } from "react";
import { Activity } from "../hooks/index.types";
import styles from "./styles.module.scss";

type Props = Pick<Activity, "progress">;

const Progress: FunctionComponent<Props> = ({ progress }) => {
  if (progress.type === "progress") {
    return (
      <div className={styles.progress}>
        <span className={styles.text}>60%</span>
        <progress max="100" value="60"></progress>
      </div>
    );
  }

  if (progress.type === "score") {
    <>
      <span className={styles.text}>{progress.score}</span>
      <span className={styles.subtext}> из {progress.maxScore}</span>
    </>;
  }

  if (progress.type === "text" && progress.text) {
    return <span className={styles.text}>{progress.text}</span>;
  }

  return null;
};

export default Progress;
