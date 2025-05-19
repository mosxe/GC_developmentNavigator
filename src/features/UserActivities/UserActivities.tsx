import { FunctionComponent } from "react";
import { useGetUserActivities } from "./hooks";
import { UserActivity } from "@/types";
import ActivityCard from "./components/ActivityCard";
import ActivitySkeletonCard from "./components/ActivitySkeletonCard";
import { ErrorBoundary } from "react-error-boundary";
import { Toasts } from "@ff/ui-kit";
import { ERROR_MESSAGE } from "@/constants";
import styles from "./UserActivities.module.scss";

const UserActivities: FunctionComponent = () => {
  const { data, isLoading, error } = useGetUserActivities();
  console.log("error");
  console.log(error);
  if (isLoading) {
    return (
      <section className={styles["user-activity"]}>
        <ActivitySkeletonCard />
        <ActivitySkeletonCard />
        <ActivitySkeletonCard />
        <ActivitySkeletonCard />
        <ActivitySkeletonCard />
        <ActivitySkeletonCard />
      </section>
    );
  }

  if (error) {
    return <section>{ERROR_MESSAGE}</section>;
  }

  return (
    <section className={styles["user-activity"]}>
      <ErrorBoundary fallback={<div>{ERROR_MESSAGE}</div>}>
        {data.map((card: UserActivity, index) => (
          <ActivityCard key={index} {...card} />
        ))}
      </ErrorBoundary>
      <Toasts style={{ zIndex: 2000 }} />
    </section>
  );
};

export default UserActivities;
