import { FC } from "react";
import styles from "./Home.module.scss";

export interface HomeProps {
  className?: string;
}

export const Home: FC<HomeProps> = ({ className }) => {
  return (
    <div className={styles.root}>
      Home page
    </div>
  );
};
