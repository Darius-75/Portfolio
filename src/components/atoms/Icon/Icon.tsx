import styles from "./icon.module.scss";

type Props = {
  children?: React.ReactNode;
  height?: string;
  cursor?: string;
};

const Icon = ({ children, height, cursor }: Props) => {
  return (
    <div
      className={styles.IconGlobalContainer}
      style={{ height: height, cursor: "pointer" }}
    >
      {children}
    </div>
  );
};

export default Icon;
