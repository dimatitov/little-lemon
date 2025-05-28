import { FC } from "react";
import styles from "./ConfirmationReservation.module.scss";

export interface ConfirmationReservationProps {
  className?: string;
}

export const ConfirmationReservation: FC<ConfirmationReservationProps> = ({ className }) => {
  return (
    <div className={styles.root}>
      ConfirmationReservation page
    </div>
  );
};
