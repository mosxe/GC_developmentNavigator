import { FunctionComponent } from "react";
import styles from "./styles.module.scss";

type Props = {
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
};
const Skeleton: FunctionComponent<Props> = ({ width, height, style }) => {
  const widthElem = width ?? "100%";
  const heighthElem = height ?? "100%";

  return (
    <div
      className={styles.skeleton}
      style={{ height: heighthElem, width: widthElem, ...style }}
    ></div>
  );
};

export default Skeleton;
