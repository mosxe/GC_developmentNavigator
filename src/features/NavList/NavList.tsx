import { FunctionComponent } from "react";
import NavItem from "./components/NavItem";
import Skeleton from "@/components/Skeleton";
import { ErrorBoundary } from "react-error-boundary";
import { useGetNavLinks } from "./hooks";
import { ERROR_MESSAGE } from "@/constants";
import styles from "./NavList.module.scss";

const NavList: FunctionComponent = () => {
  const { data, isLoading, error } = useGetNavLinks();

  if (isLoading) {
    return (
      <ul className={styles["nav-list"]}>
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
      </ul>
    );
  }

  if (error) {
    return <div>{ERROR_MESSAGE}</div>;
  }

  return (
    <ul className={styles["nav-list"]}>
      <ErrorBoundary fallback={<div>{ERROR_MESSAGE}</div>}>
        {data.map(({ link, label }, index) => (
          <NavItem key={index} link={link} label={label} />
        ))}
      </ErrorBoundary>
    </ul>
  );
};

export default NavList;
