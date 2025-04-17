import { FunctionComponent } from "react";
import cls from "classnames";
import { Recommendation } from "../hooks/index.types";
import styles from "./styles.module.scss";

const RecommendationCard: FunctionComponent<Omit<Recommendation, "id">> = ({
  title,
  text,
  image,
  link,
}) => {
  const classNameCard = cls(styles["recommendation-card"], {
    [styles["recommendation-card_l"]]: !!image,
  });

  return (
    <div className={classNameCard}>
      {image && (
        <div className={styles["recommendation-card__wrapper"]}>
          <img
            className={styles["recommendation-card__image"]}
            src="https://i.pinimg.com/originals/5d/e2/42/5de24294bad21ec99931f4c362354f22.jpg"
            alt="Картинка"
          />
        </div>
      )}
      <div className={styles["recommendation-card__wrapper"]}>
        <div className={styles["recommendation-card__container"]}>
          <span
            className={`${styles["recommendation-card__text"]} ${styles["recommendation-card__text_bold"]}`}
          >
            {title}
          </span>
          <span className={styles["recommendation-card__text"]}>{text}</span>
        </div>
        {link && (
          <button
            className={styles["recommendation-card__btn"]}
            type="button"
            onClick={() => window.open(link, "_blank")}
          >
            <span>Подробнее</span>
            <svg
              width="12.499512"
              height="10.500000"
              viewBox="0 0 12.4995 10.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs />
              <path
                id="Vector"
                d="M1 6.27C0.44 6.27 0 5.82 0 5.27C0 4.72 0.44 4.27 1 4.27L9.09 4.27L6.54 1.7C6.15 1.31 6.15 0.68 6.54 0.29C6.93 -0.1 7.56 -0.1 7.95 0.29L12.2 4.56C12.59 4.95 12.59 5.59 12.2 5.98L7.95 10.2C7.56 10.59 6.93 10.59 6.54 10.2C6.15 9.81 6.15 9.18 6.54 8.79L9.07 6.27L1 6.27Z"
                fill="#8B55FF"
                fillOpacity="1.000000"
                fillRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default RecommendationCard;
