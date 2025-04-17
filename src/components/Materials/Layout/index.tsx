import { FunctionComponent, ReactNode } from "react";
import Title from "components/Title";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
};

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <section className={styles.materials}>
      <Title text="Дополнительные материалы" size="medium" />
      <div>{children}</div>
    </section>
  );
};

export default Layout;
