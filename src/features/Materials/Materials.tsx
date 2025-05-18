import { FunctionComponent } from "react";
import MaterialsLayout from "./components/MaterialsLayout";
import Material from "./components/Material";
import Skeleton from "@/components/Skeleton";
import { ErrorBoundary } from "react-error-boundary";
import { useGetMaterials } from "./hooks";
import { ERROR_MESSAGE } from "@/constants";

const Materials: FunctionComponent = () => {
  const { data, isLoading, error } = useGetMaterials();

  if (isLoading) {
    return (
      <MaterialsLayout>
        <Skeleton height={40} style={{ marginBottom: "16px" }} />
        <Skeleton height={40} />
      </MaterialsLayout>
    );
  }

  if (error) {
    return <MaterialsLayout>{ERROR_MESSAGE}</MaterialsLayout>;
  }
  return (
    <MaterialsLayout>
      <ErrorBoundary fallback={<div>{ERROR_MESSAGE}</div>}>
        {data.map(({ id, title, link }) => (
          <Material key={id} title={title} link={link} />
        ))}
      </ErrorBoundary>
    </MaterialsLayout>
  );
};

export default Materials;
