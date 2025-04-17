import { FunctionComponent } from "react";
import Skeleton from "components/Skeleton";
import styles from "./styles.module.scss";

const SkeletonCard: FunctionComponent = () => {
  return (
    <div
      className={`${styles["activity-card"]} ${styles["activity-card_skeleton"]}`}
    >
      <div className={styles["activity-card__content"]}>
        <div className={styles["activity-card__icon"]}>
          <Skeleton width={48} height={48} />
        </div>
        <Skeleton height={24} />
        <div className={styles["activity-card__body"]}>
          <Skeleton height={32} />
          <Skeleton height={16} />
          <Skeleton height={16} />
        </div>
        <div className={styles["activity-card__footer"]}>
          <Skeleton width={100} height={24} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
