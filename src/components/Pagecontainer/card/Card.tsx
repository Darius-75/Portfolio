import React from "react";
import Spacer from "../../Spacer";

import styles from "./card.module.scss";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.textContainer}>
        <p>Title</p>
      </div>
      <div className={styles.spacer} />
      <div className={styles.bottomTextContainer}>
        <p>blabla</p>
        <p>blablou</p>
      </div>
    </div>
  );
};

export default Card;
