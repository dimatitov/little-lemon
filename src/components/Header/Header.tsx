import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NAVIGATE } from "constants/navigate";
import logoImage from "assets/logo.png";
import classNames from "classnames";

import styles from "./Header.module.scss";
import { PATCHS } from "constants/paths";

export const Header: React.FC = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={styles.root}>
      <Link className={styles.logo} to={PATCHS.ROOT}>
        <img src={logoImage} alt="Little Lemon logo" />
      </Link>
      <button
        className={styles.hamburger}
        type="button"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={isNavExpanded ? faXmark : faBars} />
      </button>
      <nav
        className={classNames(styles.nav, {
          [styles.expanded]: isNavExpanded,
        })}
      >
        <ul className={styles.links}>
          {NAVIGATE.map(({ route, title, key }) => (
            <li key={key} onClick={() => setIsNavExpanded(false)}>
              <Link className={styles.item} to={route}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
