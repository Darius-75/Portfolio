import React from "react";
import Card from "../card/Card";
import styles from "./purple-container.module.scss";

type Props = {};

const PurpleContainer = (props: Props) => {
  return (
    <div className={styles.purpleContainer}>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default PurpleContainer;
