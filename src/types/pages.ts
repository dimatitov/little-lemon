export type PageKey = "home" | "reservations" | "confirmation-reservation";

export interface Page {
  key: PageKey;
  titlePhrase: string;
  route: string;
}
