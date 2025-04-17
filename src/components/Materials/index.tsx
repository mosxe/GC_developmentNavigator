import { FunctionComponent } from "react";
import { useGetMaterials } from "./hooks/useGetMaterials";
import Layout from "./Layout";
import Material from "./Material";
import Skeleton from "components/Skeleton";
import { ErrorBoundary } from "react-error-boundary";
import { ERROR_MESSAGE } from "constants";

const Materials: FunctionComponent = () => {
  const { data, isLoading, error } = useGetMaterials();
  const isError = error || data === null || data.error;

  if (isLoading) {
    return (
      <Layout>
        <Skeleton height={40} style={{ marginBottom: "16px" }} />
        <Skeleton height={40} />
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout>
        <div>{ERROR_MESSAGE}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <ErrorBoundary fallback={<div>{ERROR_MESSAGE}</div>}>
        {data.data.map(({ title, link }, index) => (
          <Material key={index} title={title} link={link} />
        ))}
      </ErrorBoundary>
    </Layout>
  );
};

export default Materials;
