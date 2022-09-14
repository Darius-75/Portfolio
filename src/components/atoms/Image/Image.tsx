import styles from "./image.module.scss";
import Defaultimage from "../../../img/apparel/apparelLogo.png";

type Props = {
  src?: any;
  resize?: string;
  margin?: string;
  height?: string;
  width?: string;
};

const image = ({ src = Defaultimage, margin = "0", width, height }: Props) => {
  return (
    <img
      className={styles.imageGlobalContainer}
      src={src}
      alt="image"
      style={{ width, height, margin }}
    />
  );
};

export default image;
