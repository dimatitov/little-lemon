export type NavigateKey = "home" | "about" | "menu" | "reservation";

export interface Navigate {
  key: NavigateKey;
  route: string;
  title: string;
}
