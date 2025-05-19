import { FunctionComponent, ReactNode } from "react";
import Title from "@/components/Title";
import styles from "./MaterialsLayout.module.scss";

type Props = {
  children: ReactNode;
};

const MaterialLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <section className={styles.materials}>
      <Title text="Дополнительные материалы" size="medium" />
      <div>{children}</div>
    </section>
  );
};

export default MaterialLayout;
