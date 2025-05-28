import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Footer.module.scss";
import logoWhiteImage from "assets/logo-white.png";
import { contacts, socials } from "./contstants";
import { NAVIGATE } from "constants/navigate";
import { Link } from "react-router-dom";

export interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={styles.footer}>
      <img
        className={styles.footerLogo}
        src={logoWhiteImage}
        alt="Little Lemon"
      />
      <nav className={styles.footerNav}>
        <h4>Sitemap</h4>
        <ul className={styles.navigate}>
          {NAVIGATE.map(({ route, title, key }) => (
            <li key={key}>
              <Link to={route} className={styles.navigateItem}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.footerContact}>
        <h4>Contact us</h4>
        <address>
          {contacts.map((contact, index) => (
            <p key={index}>
              <FontAwesomeIcon icon={contact.icon} /> {contact.info}
            </p>
          ))}
        </address>
      </div>
      <div className={styles.footerSocial}>
        <h4>Connect with us</h4>
        {socials.map((social, index) => (
          <a
            key={index}
            href={`https://www.${social.name}.com`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={social.icon} size="lg" />
          </a>
        ))}
      </div>
    </div>
  );
};
