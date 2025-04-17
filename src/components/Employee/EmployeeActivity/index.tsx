"use client";

import { FunctionComponent } from "react";
import { useGetEmployeeActivity } from "./hooks/useGetEmployeeActivity";
import { Activity } from "./hooks/index.types";
import ActivityCard from "./ActivityCard";
import SkeletonCard from "./ActivityCard/SkeletonCard";
import Progress from "./Progress";
import { ErrorBoundary } from "react-error-boundary";
import { ERROR_MESSAGE } from "constants";
import styles from "./styles.module.scss";

const EmployeeActivity: FunctionComponent = () => {
  const { data, isLoading, error } = useGetEmployeeActivity();
  const isError = error || data === null || data.error;
  console.log("emplo activity");
  console.log(data);

  console.log("isError:  " + isError);
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
    <div className={styles["employee-activity"]}>
      <ErrorBoundary fallback={<div>{ERROR_MESSAGE}</div>}>
        {data.data.map((card: Activity, index) => (
          <ActivityCard
            key={index}
            icon={card.icon}
            title={card.title}
            buttonName={card.buttonName}
            link={card.link}
            date={card.date}
            status={card.status}
            progress={<Progress progress={card.progress} />}
          />
        ))}
      </ErrorBoundary>
    </div>
  );
};

export default EmployeeActivity;
