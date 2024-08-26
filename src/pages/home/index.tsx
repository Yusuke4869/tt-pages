import { Profile } from "~/components/Profile";

import styles from "./index.module.css";

import type { FC } from "react";

export const Home: FC = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Hi, there!</h1>
    <Profile />
  </div>
);
