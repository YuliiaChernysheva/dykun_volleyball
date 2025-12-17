"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import Container from "../Container/Container";

export function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <svg
              className={styles.logo}
              width="104"
              height="16"
              aria-hidden="true"
            >
              <use href="/symbol-defs.svg#logo" />
            </svg>
          </Link>

          <nav className={styles.nav}>
            <Link
              href="/"
              className={`${styles.navLink} ${
                pathname === "/" ? styles.active : ""
              }`}
            >
              Home
            </Link>

            <Link
              href="/catalog"
              className={`${styles.navLink} ${
                pathname.startsWith("/catalog") ? styles.active : ""
              }`}
            >
              Catalog
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
