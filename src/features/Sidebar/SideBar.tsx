import { FunctionComponent } from "react";
import NavLink from "@/features/NavList";
import Widget from "./components/Widget";
import styles from "./SideBar.module.scss";
import Image from "@/images/career_consultants.jpg";

const Sidebar: FunctionComponent = () => {
  return (
    <aside className={styles.aside}>
      <NavLink />
      <Widget
        title="Календарь карьерных консультантов"
        image={Image}
        link="/_wt/calendar_career_consultants/doc_id/7508746636170091242"
        background="purple"
      />
    </aside>
  );
};

export default Sidebar;
