import { useState, FunctionComponent, ReactElement } from "react";
import { NotificationService } from "@intauto/ui-kit";
import ActivityIcon from "../ActivityIcon";
import ActivityProgress from "../ActivityProgress";
import TextTooltip from "@/components/TextTooltip";
import ActivitySkeletonCard from "../ActivitySkeletonCard";
import Modal from "@ff/ui-kit/lib/Modal";
import Button from "@ff/ui-kit/lib/Button";
import { createIpr } from "@/api";
import { UserActivity } from "@/types";
import clsx from "classnames";
import styles from "./ActivityCard.module.scss";

const ActivityCard: FunctionComponent<UserActivity> = (props): ReactElement => {
  const [data, setData] = useState<UserActivity>(props);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
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

  const classNameCardContent = clsx(styles["activity-card__content"], {
    [styles["activity-card__content-r"]]: !link,
  });

  const handleClick = async () => {
    if (icon === "ipr" && isAssignable) {
      setIsOpen(true);
    } else {
      window.open(link, "_blank");
    }
  };

  const onCreateIpr = async () => {
    closeModal();
    setIsLoading(true);
    try {
      const response = await createIpr();
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
        NotificationService.baseNotification("ИПР успешно создан", "success", {
          closeOnClick: false,
          pauseOnFocusLoss: false,
          position: "top-right",
        });
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
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalActions = (
    <div className={styles["activity-card__modal-actions"]}>
      <Button
        className={styles["activity-card__modal-button"]}
        onClick={onCreateIpr}
      >
        Создать
      </Button>
      <Button onClick={closeModal}>Отмена</Button>
    </div>
  );

  if (isLoading) {
    return <ActivitySkeletonCard />;
  }

  return (
    <>
      <div className={styles["activity-card"]}>
        <div className={styles["activity-card__wrapper"]}>
          <div className={classNameCardContent}>
            <div className={styles["activity-card__icon"]}>
              <ActivityIcon iconName={icon} />
            </div>
            <TextTooltip text={title}>
              <h3 className={styles["activity-card__title"]}>{title}</h3>
            </TextTooltip>
            <div className={styles["activity-card__body"]}>
              <div className={styles["activity-card__progress"]}>
                <ActivityProgress progress={progress} />
              </div>
              <span className={styles["activity-card__text"]}>{date}</span>
              <span
                className={`${styles["activity-card__text"]} ${styles["activity-card__text_line-clamp-2"]}`}
              >
                {status}
              </span>
            </div>
          </div>
          {(link || isAssignable) && (
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
          )}
        </div>
      </div>
      <Modal
        actions={modalActions}
        disableOutsideScroll
        disableDivide
        onClose={closeModal}
        width="700px"
        title="Создание ИПР"
        visible={isOpen}
      >
        Вы уверены, что хотите сформировать индивидуальный план развития?
      </Modal>
    </>
  );
};

export default ActivityCard;
