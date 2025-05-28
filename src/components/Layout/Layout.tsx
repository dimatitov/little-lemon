import { ReactNode } from "react";

import { Header } from "components/Header";

import styles from "./Layout.module.scss";
import { Footer } from "components/Footer";

export interface Props {
  children?: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};
