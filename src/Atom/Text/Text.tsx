import React from "react";
import styles from "./text.module.scss";

type TextProps = {
  value?: string | undefined | null;
  color?: string;
  size?: string;
  fontStyle?: string;
  margin?: string;
  padding?: string;
  align?: "end" | "left" | "right" | "center" | "justify" | "match-parent";
  wordBreak?: "normal" | "break-all" | "keep-all" | "break-word";
  cursor?: string;
  textDecoration?: string;
};

const Text = ({
  value,
  color = "black",
  size,
  fontStyle,
  margin = "0",
  padding,
  align,
  wordBreak = "break-all",
  cursor = "pointer",
  textDecoration,
}: TextProps) => {
  return (
    <div
      className={styles.text}
      style={{
        fontSize: size,
        color: color,
        margin,
        fontStyle,
        textAlign: align,
        cursor,
        padding,
        wordBreak,
        textDecoration,
      }}
    >
      {value}
    </div>
  );
};

export default Text;
