import React, { FunctionComponent, ReactElement } from "react";
import Icon, { IconProps } from "../Icon";
import styles from "./styles.module.scss";

type Props = {
  icon: IconProps;
  title: string;
  buttonName: string;
  link?: string;
  date?: string;
  status?: string;
  progress?: React.ReactNode;
};

const ActivityCard: FunctionComponent<Props> = ({
  icon,
  title,
  link,
  progress,
  date,
  status,
  buttonName,
}): ReactElement => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className={styles["activity-card"]}>
      <div className={styles["activity-card__content"]}>
        <div className={styles["activity-card__icon"]}>
          <Icon iconName={icon} />
        </div>
        <h3 className={styles["activity-card__title"]}>{title}</h3>
        <div className={styles["activity-card__body"]}>
          <div className={styles["activity-card__progress"]}>{progress}</div>
          <span className={styles["activity-card__text"]}>{date}</span>
          <span className={styles["activity-card__text"]}>{status}</span>
        </div>
      </div>
      <div className={styles["activity-card__footer"]}>
        <button
          type="button"
          className={styles["activity-card__btn"]}
          onClick={handleClick}
        >
          <span>{buttonName}</span>
          <svg
            width="8.333008"
            height="7.000000"
            viewBox="0 0 8.33301 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs />
            <path
              id="Vector"
              d="M0.66 4.18C0.29 4.18 0 3.88 0 3.51C0 3.14 0.29 2.84 0.66 2.84L6.06 2.84L4.36 1.13C4.1 0.87 4.1 0.45 4.36 0.19C4.62 -0.07 5.04 -0.07 5.3 0.19L8.13 3.04C8.39 3.3 8.39 3.72 8.13 3.98L5.3 6.8C5.04 7.06 4.62 7.06 4.36 6.8C4.1 6.54 4.1 6.12 4.36 5.86L6.04 4.18L0.66 4.18Z"
              fill="#494949"
              fillOpacity="1.000000"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
