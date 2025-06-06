import { FunctionComponent } from "react";
import { useGetUserActivities } from "./hooks";
import { UserActivity } from "@/types";
import ActivityCard from "./components/ActivityCard";
import ActivitySkeletonCard from "./components/ActivitySkeletonCard";
import { ErrorBoundary } from "react-error-boundary";
import Toasts from "@ff/ui-kit/lib/Toasts";
import Carousel from "@ff/ui-kit/lib/Carousel";
import { ERROR_MESSAGE } from "@/constants";
import styles from "./UserActivities.module.scss";

const UserActivities: FunctionComponent = () => {
  const { data, isLoading, error } = useGetUserActivities();

  if (isLoading) {
    return (
      <section>
        <div className={styles["user-activity"]}>
          <ActivitySkeletonCard />
          <ActivitySkeletonCard />
          <ActivitySkeletonCard />
        </div>
      </section>
    );
  }

  if (error) {
    return <section>{ERROR_MESSAGE}</section>;
  }

  return (
    <section>
      <ErrorBoundary fallback={<div>{ERROR_MESSAGE}</div>}>
        <Carousel
          className={styles.carousel}
          arrowsPosition="outside"
          displaySliders={3}
          arrows
        >
          {data.map((card: UserActivity, index) => (
            <ActivityCard key={index} {...card} />
          ))}
        </Carousel>
      </ErrorBoundary>
      <Toasts style={{ zIndex: 2000 }} />
    </section>
  );
};

export default UserActivities;
