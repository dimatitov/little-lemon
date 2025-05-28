import { Page, PageKey } from "types/pages";
import { PATCHS } from "constants/paths";

export const PAGES_CONFIG: { [key in PageKey]: Page } = {
  home: {
    key: "home",
    titlePhrase: "Home",
    route: PATCHS.HOME,
  },
  reservations: {
    key: "reservations",
    titlePhrase: "Reservations",
    route: PATCHS.RESERV,
  },
  "confirmation-reservation": {
    key: "confirmation-reservation",
    titlePhrase: "Confirmation Reservation",
    route: PATCHS.CONFIRM_RESRV,
  },
};

export const PAGES = Object.values(PAGES_CONFIG);
