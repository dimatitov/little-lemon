import React from "react";
import { useNavigate } from "react-router-dom";
import { PATCHS } from "constants/paths";
import restaurantFoodImage from "assets/restaurant-food.jpg";

import styles from "./Hero.module.scss";
import { Button } from "components/Button";

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const handleClickReserv = () => {
    navigate(PATCHS.RESERV);
  };
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.heroInformation}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button value="Reserve a table" onClick={handleClickReserv} />
        </div>
        <img
          className={styles.heroImage}
          src={restaurantFoodImage}
          alt="Restaurant food"
        />
      </div>
    </section>
  );
};
