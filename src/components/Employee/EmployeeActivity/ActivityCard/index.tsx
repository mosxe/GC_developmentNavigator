import { useState, FunctionComponent, ReactElement } from "react";
import { NotificationService } from "@intauto/ui-kit";
import Icon from "../Icon";
import Progress from "../Progress";
import TextTooltip from "../TextTooltip";
import SkeletonCard from "./SkeletonCard";
import { createIpr } from "api";
import { Response } from "api/index.types";
import styles from "./styles.module.scss";
import { Activity } from "../hooks/index.types";

const ActivityCard: FunctionComponent<Activity> = (props): ReactElement => {
  const [data, setData] = useState<Activity>(props);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    icon,
    title,
    link,
    date,
    status,
    buttonName,
    isAssignable,
    progress,
  } = data;

  const handleClick = async () => {
    if (icon === "ipr" && isAssignable) {
      setIsLoading(true);
      try {
        const response = await createIpr<Response<Activity>>();
        if (response.error) {
          const errorText =
            response.errorText || "Возникла ошибка при создании ИПР";
          NotificationService.baseNotification(errorText, "danger", {
            closeOnClick: false,
            pauseOnFocusLoss: false,
            position: "top-right",
          });
        } else {
          setData(response.data);
        }
      } catch (error) {
        console.error(error);
        NotificationService.baseNotification(
          "Возникла ошибка при создании ИПР",
          "danger",
          {
            closeOnClick: false,
            pauseOnFocusLoss: false,
            position: "top-right",
          }
        );
      }
      setIsLoading(false);
    } else {
      window.open(link, "_blank");
    }
  };

  if (isLoading) {
    return <SkeletonCard />;
  }

  return (
    <div className={styles["activity-card"]}>
      <div className={styles["activity-card__content"]}>
        <div className={styles["activity-card__icon"]}>
          <Icon iconName={icon} />
        </div>
        <TextTooltip text={title}>
          <h3 className={styles["activity-card__title"]}>{title}</h3>
        </TextTooltip>
        <div className={styles["activity-card__body"]}>
          <div className={styles["activity-card__progress"]}>
            <Progress progress={progress} />
          </div>
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
