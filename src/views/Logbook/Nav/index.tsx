import React from "react";
import Link from "next/link";

import { Button, IconAngleLeft, TextIcon } from "~/components";

import styles from "./styles.module.css";

export interface NavProps {
  tokenID: String;
}

export const Nav: React.FC<NavProps> = ({ tokenID }) => {
  // TODO: book id
  return (
    <section className={styles.container}>
      <Link href="bookcase" passHref>
        <TextIcon
          icon={<IconAngleLeft size="smS" />}
          color="grey"
          weight="bold"
        >
          My Bookcase<span className={styles.interpunct}>·</span>
        </TextIcon>
      </Link>
      <TextIcon color="blueGreen" weight="bold">
        <span>#</span>
        <span>{tokenID.slice(2, 6)}</span>
      </TextIcon>
    </section>
  );
};
