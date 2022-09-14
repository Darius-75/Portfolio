import React from "react";

import styles from "./gridProjects.module.scss";

type Props = {
  children: React.ReactNode;
};

const GridProjects = ({ children }: Props) => {
  return <div className={styles.GridProject}>{children}</div>;
};

export default GridProjects;
