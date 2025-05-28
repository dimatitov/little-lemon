import { Link } from "react-router-dom";
import { Meal } from "../WeekSpecials/constants";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./MealCard.module.scss";

export interface Props {
  meal: Meal;
}

export const MealCard: React.FC<Props> = ({ meal }) => {
  return (
    <article className={styles.mealCard}>
      <div className={styles.mealCardImage}>
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className={styles.mealCardHeader}>
        <h3>{meal.name}</h3>
        <span>{meal.price}</span>
      </div>
      <div className={styles.mealCardBodyFooter}>
        <p>{meal.description}</p>
        <Link to="/order" className={styles.link}>
          Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
        </Link>
      </div>
    </article>
  );
};
