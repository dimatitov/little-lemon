import { FC } from "react";
import styles from "./Reservation.module.scss";

export interface ReservationProps {
  className?: string;
}

export const Reservation: FC<ReservationProps> = ({ className }) => {
  return (
    <div className={styles.root}>
      Reservation page
    </div>
  );
};
