import { ReactNode } from "react";
import styles from "./styles.module.scss";

const index = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default index;
