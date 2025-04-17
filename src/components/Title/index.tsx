import styles from "./styles.module.scss";

type Props = {
  text: string;
  size?: "large" | "medium";
};

const Title = ({ text, size = "large" }: Props) => {
  if (size === "medium") {
    return <h2 className={`${styles.title} ${styles.title_m}`}>{text}</h2>;
  }

  return <h1 className={styles.title}>{text}</h1>;
};

export default Title;
