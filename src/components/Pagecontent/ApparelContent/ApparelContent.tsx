import styles from "./ApparelContent.module.scss";
import woman from "../../../img/apparel/woman.jpg";
import Text from "../../atoms/Text/Text";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../../../img/apparel/apparelLogo.png";

type Props = {};

const ApparelContent = (props: Props) => {
  return (
    <div className={styles.apparelContainer}>
      <div className={styles.apparelLeftContainer}>
        <div className={styles.logoContainer}></div>
        <div className={styles.textandImgContainer}>
          <img src={logo} alt="" />

          <div className={styles.spacer}></div>
          <div className={styles.ImgContainerMobile}>
            <img className={styles.womanImg} src={woman} alt="image" />
          </div>

          <Text value={"WE'RE"} size={"100px"} color={"#B89A9C"} />
          <Text value={"COMING  SOON  "} size={"50px"} fontStyle={"bold"} />

          <Text
            value={
              "Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals. "
            }
            color={"#B89A9C"}
            size={"20px"}
            padding={"20px 0"}
            wordBreak={"break-all"}
          />
          <form>
            <input placeholder="Email Adress" />
            <button className={styles.inputButton}>
              <IoIosArrowForward />
            </button>
          </form>
        </div>
      </div>
      <div className={styles.ImgContainerDesktop}>
        <img className={styles.womanImg} src={woman} alt="image" />
      </div>
    </div>
  );
};

export default ApparelContent;
