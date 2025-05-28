import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export const contacts: Contacts[] = [
  { icon: faLocationDot, info: "Rua Baltazar, Recife" },
  { icon: faPhone, info: "+55 (81) 123-4567" },
  { icon: faEnvelope, info: "me@lemon.com" },
];

export const socials: Socials[] = [
  { icon: faFacebook, name: "facebook" },
  { icon: faInstagram, name: "instagram" },
  { icon: faTwitter, name: "twitter" },
  { icon: faYoutube, name: "youtube" },
];

interface Socials {
  icon: IconDefinition;
  name: "facebook" | "instagram" | "twitter" | "youtube";
}

interface Contacts {
  icon: IconDefinition;
  info: string;
}
