import { FunctionComponent } from "react";
import { useGetUserInfo } from "./hooks";
import Skeleton from "@/components/Skeleton";
import { ErrorBoundary } from "react-error-boundary";
import { ERROR_MESSAGE } from "@/constants";
import styles from "./UserInfo.module.scss";

const UserInfo: FunctionComponent = () => {
  const { data, isLoading, error } = useGetUserInfo();

  if (isLoading) {
    return (
      <section className={styles["user-info"]}>
        <div className={styles["user-info__wrapper"]}>
          <Skeleton width={80} height={80} />
          <div className={styles["user-info__container"]}>
            <Skeleton height={24} />
            <Skeleton height={18} />
          </div>
        </div>
        <Skeleton height={24} />
      </section>
    );
  }

  if (error) {
    return <section className={styles["user-info"]}>{ERROR_MESSAGE}</section>;
  }

  return (
    <section className={styles["user-info"]}>
      <ErrorBoundary fallback={<div>{ERROR_MESSAGE}</div>}>
        <div className={styles["user-info__wrapper"]}>
          <div className={styles["user-info__img"]}>
            <img src={data.avatar} alt="Фото" />
          </div>
          <div className={styles["user-info__container"]}>
            <span className={styles["user-info__title"]}>{data.fullname}</span>
            <span className={styles["user-info__text"]}>{data.position}</span>
          </div>
        </div>
        {data.education && (
          <div className={styles["user-info__desc"]}>
            <strong>Моё обучение: </strong>
            <span dangerouslySetInnerHTML={{ __html: data.education }}></span>
          </div>
        )}
      </ErrorBoundary>
    </section>
  );
};

export default UserInfo;
