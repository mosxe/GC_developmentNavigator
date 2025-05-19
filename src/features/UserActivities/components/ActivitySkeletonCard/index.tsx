import { FunctionComponent } from "react";
import Skeleton from "@/components/Skeleton";
import styles from "./ActivitySkeletonCard.module.scss";

const SkeletonCard: FunctionComponent = () => {
  return (
    <div className={styles["activity-card-skeleton"]}>
      <div className={styles["activity-card-skeleton__content"]}>
        <div className={styles["activity-card-skeleton__icon"]}>
          <Skeleton width={48} height={48} />
        </div>
        <Skeleton height={24} />
        <div className={styles["activity-card-skeleton__body"]}>
          <Skeleton height={32} />
          <Skeleton height={16} />
          <Skeleton height={16} />
        </div>
        <div className={styles["activity-card-skeleton__footer"]}>
          <Skeleton width={100} height={24} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
