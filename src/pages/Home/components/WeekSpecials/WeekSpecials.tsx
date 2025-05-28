import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { PATCHS } from "constants/paths";
import { Button } from "components/Button";

import { meals } from "./constants";

import { MealCard } from "../MealCard";

import styles from "./WeekSpecials.module.scss";

export const WeekSpecials: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(PATCHS.MENU);
  };
  return (
    <section className={classNames(styles.weekSpecials)} id="menu">
      <div className={styles.WeekSpecialsHeader}>
        <h2>This week specials!</h2>
        <Button value="Online Menu" onClick={handleClick} />
      </div>
      {meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
};
