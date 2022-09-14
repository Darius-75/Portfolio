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
  fontWeight?: string;
  font?: "SectionTitle-font-family" | "ProjectTitle-font-family";
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
  cursor,
  textDecoration,
  fontWeight,
  font,
}: TextProps) => {
  return (
    <div
      className={styles.TextGlobalContainer}
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
        fontWeight,
        font,
      }}
    >
      {value}
    </div>
  );
};

export default Text;
