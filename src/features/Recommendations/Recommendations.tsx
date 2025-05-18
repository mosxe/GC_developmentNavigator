import { FunctionComponent } from "react";
import RecommendationsLayout from "./components/RecommendationsLayout";
import RecommendationCard from "./components/RecommendationCard";
import Skeleton from "@/components/Skeleton";
import { ErrorBoundary } from "react-error-boundary";
import { useGetRecommendations } from "./hooks";
import { ERROR_MESSAGE } from "@/constants";
import styles from "./Recommendations.module.scss";

const Recommendations: FunctionComponent = () => {
  const { data, isLoading, error } = useGetRecommendations();

  if (isLoading) {
    return (
      <RecommendationsLayout>
        <div className={styles.recommendations}>
          <Skeleton height={176} />
          <Skeleton height={176} />
          <Skeleton height={176} />
        </div>
      </RecommendationsLayout>
    );
  }

  if (error) {
    return (
      <RecommendationsLayout>
        <div style={{ marginTop: "48px" }}>{ERROR_MESSAGE}</div>
      </RecommendationsLayout>
    );
  }
  return (
    <RecommendationsLayout>
      <ErrorBoundary fallback={<div>{ERROR_MESSAGE}</div>}>
        <div className={styles.recommendations}>
          {data.map((item) => (
            <RecommendationCard key={item.id} {...item} />
          ))}
        </div>
      </ErrorBoundary>
    </RecommendationsLayout>
  );
};

export default Recommendations;
