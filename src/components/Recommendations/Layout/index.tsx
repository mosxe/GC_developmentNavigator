import { FunctionComponent, ReactNode } from "react";
import Title from "components/Title";

type Props = {
  children: ReactNode;
};

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <section>
      <Title text="С чего мне сегодня начать свое развитие?" size="medium" />
      {children}
    </section>
  );
};

export default Layout;
