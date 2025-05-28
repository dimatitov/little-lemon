import { FC } from "react";
import styles from "./Error404.module.scss";

export interface Error404Props {
  className?: string;
}

export const Error404: FC<Error404Props> = ({ className }) => {
  return (
    <div className={styles.root}>
      Error404 page
    </div>
  );
};
