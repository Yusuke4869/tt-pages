import styles from "./index.module.css";

import type { FC } from "react";

export const Profile: FC = () => (
  <div>
    <div className={styles.name}>
      <img alt="Yusuke4869" src="https://github.com/Yusuke4869.png" />
      <h2>Yusuke4869</h2>
    </div>
    <div>
      <p>My name is Yusuke!</p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/Yusuke4869" rel="noopener noreferrer" target="_blank">
          @Yusuke4869
        </a>
      </p>
      <p>
        Portfolio:{" "}
        <a href="https://yusuke4869.dev/" rel="noopener noreferrer" target="_blank">
          yusuke4869.dev
        </a>
      </p>
    </div>
  </div>
);
