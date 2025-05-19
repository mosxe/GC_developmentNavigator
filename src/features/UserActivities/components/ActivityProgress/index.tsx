import { FunctionComponent } from "react";
import TextTooltip from "@/components/TextTooltip";
import { UserActivity } from "@/types";
import styles from "./ActivityProgress.module.scss";

type Props = Pick<UserActivity, "progress">;

const ActivityProgress: FunctionComponent<Props> = ({ progress }) => {
  if (progress.type === "progress") {
    return (
      <div className={styles.progress}>
        <span className={styles.text}>{progress.score}%</span>
        <progress max="100" value={progress.score}></progress>
      </div>
    );
  }

  if (progress.type === "score") {
    return (
      <>
        <span className={styles.text}>{progress.score}</span>
        <span className={styles.subtext}> из {progress.maxScore}</span>
      </>
    );
  }

  if (progress.type === "text" && progress.text) {
    return (
      <TextTooltip text={progress.text}>
        <span className={styles.text}>{progress.text}</span>
      </TextTooltip>
    );
  }

  return null;
};

export default ActivityProgress;
