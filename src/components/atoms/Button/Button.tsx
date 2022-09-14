import styles from "./button.module.scss";

type ButtonProps = {
  text: string;
  handleClick?: any;
  width?: string;
  height?: string;
  background?: string;
  color?: string;
  fontSize?: string;
  border?: string;
  margin?: string;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  text,
  handleClick,
  background,
  width,
  height,
  color,
  border,
  type,
  margin,
}: ButtonProps) => {
  return (
    <button
      className={styles.ButtonGlobalContainer}
      style={{ width, height, background, color, border, margin }}
      onClick={handleClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
