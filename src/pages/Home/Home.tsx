import { FC } from "react";
import styles from "./Home.module.scss";
import { Hero } from "./components/Hero";
import { WeekSpecials } from "./components/WeekSpecials";

export const Home: FC = () => {
  return (
    <div className={styles.root}>
      <Hero />
      <WeekSpecials />
    </div>
  );
};
