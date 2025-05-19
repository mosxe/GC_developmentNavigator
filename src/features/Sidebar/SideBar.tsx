import { FunctionComponent } from "react";
import Widget from "./components/Widget";
import styles from "./SideBar.module.scss";

const Sidebar: FunctionComponent = () => {
  return (
    <aside className={styles.aside}>
      <Widget
        title="ПРОДвижение"
        text="Начните свой путь к работе мечты!"
        image="https://m.media-amazon.com/images/I/71n6fnPx+JL._AC_UY545_QL65_.jpg"
        link="/home"
      />
      <Widget
        title="Карьерная страница"
        text="Совершенствуй свои навыки!"
        image="https://masterpiecer-images.s3.yandex.net/7b45240a719f11ee947d3abd0be4d755:upscaled"
        link="home"
      />
    </aside>
  );
};

export default Sidebar;
