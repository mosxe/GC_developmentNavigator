import { FunctionComponent } from "react";
import { useGetEmployeeInfo } from "./hooks/useGetEmployeeInfo";
import Skeleton from "components/Skeleton";
import { ErrorBoundary } from "react-error-boundary";
import { ERROR_MESSAGE } from "constants";
import styles from "./styles.module.scss";

const EmployeeInfo: FunctionComponent = () => {
  const { data, isLoading, error } = useGetEmployeeInfo();
  const isError = error || data === null || data.error;

  if (isLoading) {
    return (
      <div className={styles["employee-info"]}>
        <Skeleton width={80} height={80} />
        <div className={styles["employee-info__container"]}>
          <Skeleton height={24} />
          <Skeleton height={18} />
        </div>
      </div>
    );
  }

  if (isError) {
    return <div className={styles["employee-info"]}>{ERROR_MESSAGE}</div>;
  }

  return (
    <div className={styles["employee-info"]}>
      <ErrorBoundary fallback={<div>{ERROR_MESSAGE}</div>}>
        <div className={styles["employee-info__img"]}>
          <img src={data.data.avatar} alt="Фото" />
        </div>
        <div className={styles["employee-info__container"]}>
          <span className={styles["employee-info__title"]}>
            {data.data.fullname}
          </span>
          <span className={styles["employee-info__text"]}>
            {data.data.position}
          </span>
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default EmployeeInfo;
