import { Navigate, NavigateKey } from "types/navigate";
import { PATCHS } from "./paths";

export const NAVIGATE_CONFIG: { [key in NavigateKey]: Navigate } = {
  home: {
    key: "home",
    title: "Home",
    route: PATCHS.HOME,
  },
  about: {
    key: "about",
    title: "About",
    route: PATCHS.ABOUT,
  },
  menu: {
    key: "menu",
    title: "Menu",
    route: PATCHS.MENU,
  },
  reservation: {
    key: "reservation",
    title: "Reservation",
    route: PATCHS.RESERV,
  },
};

export const NAVIGATE = Object.values(NAVIGATE_CONFIG);
