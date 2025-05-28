import bruschettaImage from "assets/bruschetta.jpg";
import greekSaladImage from "assets/greek-salad.jpg";
import lemonDessertImage from "assets/lemon-dessert.jpeg";

export interface Meal {
  name: string;
  image: string;
  price: string;
  description: string;
}

export const meals: Meal[] = [
  {
    name: "Greek Salad",
    image: greekSaladImage,
    price: "$10.00",
    description: `The famous greek salad of crispy lettuce, peppers, olives and
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary
      croutons.`,
  },
  {
    name: "Bruschetta",
    image: bruschettaImage,
    price: "$6.79",
    description: `Our Bruschetta is made from grilled bread that has been
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: "Lemon Dessert",
    image: lemonDessertImage,
    price: "$8.50",
    description: `This comes straight from grandma's recipe book, every last
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];
