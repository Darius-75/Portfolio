import React from "react";
import styles from "./ApparelContent.module.scss";
import woman from "../../../img/apparel/woman.jpg";
import Text from "../../../Atom/Text/Text";
import { IoIosArrowForward } from "react-icons/io";

type Props = {};

const ApparelContent = (props: Props) => {
  return (
    <div className={styles.apparelContainer}>
      <div className={styles.apparelLeftContainer}>
        <div className={styles.textContainer}>
          <div className={styles.spacer}></div>
          <Text value={"WE'RE"} size={"100px"} color={"#B89A9C"} />
          <Text value={"COMING  SOON  "} size={"50px"} />

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
            <input />
            <button className={styles.inputButton}>
              <IoIosArrowForward />
            </button>
          </form>
        </div>
      </div>
      <div className={styles.ImgContainer}>
        <img className={styles.womanImg} src={woman} alt="image" />
      </div>
    </div>
  );
};

export default ApparelContent;
