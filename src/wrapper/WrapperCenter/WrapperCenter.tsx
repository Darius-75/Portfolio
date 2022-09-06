import React from "react";
import style from "./wrapperCenter.module.scss";

type Props = {
  children: React.ReactNode;
};

const WrapperCenter = ({ children }: Props) => {
  return <div className={style.wrapperCenter}>{children}</div>;
};

export default WrapperCenter;
