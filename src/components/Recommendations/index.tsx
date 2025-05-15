import { FunctionComponent } from "react";
import RecommendationCard from "./RecommendationCard";
import Layout from "./Layout";
import Skeleton from "components/Skeleton";
import { useGetRecommendations } from "./hooks/useGetRecommendations";
import { ErrorBoundary } from "react-error-boundary";
import { ERROR_MESSAGE } from "strings";
import styles from "./styles.module.scss";

const Recommendations: FunctionComponent = () => {
  const { data, isLoading, error } = useGetRecommendations();
  const isError = error || data === null || data.error;

  if (isLoading) {
    return (
      <Layout>
        <div className={styles.recommendations}>
          <Skeleton height={176} />
          <Skeleton height={176} />
          <Skeleton height={176} />
        </div>
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout>
        <div style={{ marginTop: "48px" }}>{ERROR_MESSAGE}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <ErrorBoundary fallback={<div>{ERROR_MESSAGE}</div>}>
        <div className={styles.recommendations}>
          {data.data.map((item) => (
            <RecommendationCard key={item.id} {...item} />
          ))}
        </div>
      </ErrorBoundary>
    </Layout>
  );
};

export default Recommendations;
