import { FunctionComponent } from "react";
import { useGetEmployeeActivity } from "./hooks/useGetEmployeeActivity";
import { Activity } from "./hooks/index.types";
import ActivityCard from "./ActivityCard";
import SkeletonCard from "./ActivityCard/SkeletonCard";
import { ErrorBoundary } from "react-error-boundary";
import { Toasts } from "@ff/ui-kit";
import { ERROR_MESSAGE } from "strings";
import styles from "./styles.module.scss";

const EmployeeActivity: FunctionComponent = () => {
  const { data, isLoading, error } = useGetEmployeeActivity();
  const isError = error || data === null || data.error;

  if (isLoading) {
    return (
      <div className={styles["employee-activity"]}>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  if (isError) {
    return <div>{ERROR_MESSAGE}</div>;
  }

  return (
    <>
      <ErrorBoundary fallback={<div>{ERROR_MESSAGE}</div>}>
        <div className={styles["employee-activity"]}>
          {data.data.map((card: Activity, index) => (
            <ActivityCard key={index} {...card} />
          ))}
        </div>
      </ErrorBoundary>
      <Toasts style={{ zIndex: 2000 }} />
    </>
  );
};

export default EmployeeActivity;
