import React from "react";
import Text from "../../atoms/Text/Text";
import styles from "./diorCard.module.scss";
import DiorChanel from "../../img/DiorChanel.jpg";
import { HiOutlineShoppingBag } from "react-icons/hi";

type Props = {};

const DiorCard = (props: Props) => {
  return (
    <div className={styles.cardContainer}>
      <img src={DiorChanel} alt="img" />
      <div className={styles.CardTextContainer}>
        <Text color="grey" value={"Perfum"} padding="10px" />
        <Text
          color="black"
          value={"Gabrielle Essence Eau de Parfum"}
          fontStyle="bold"
          padding="10px"
        />
        <Text
          color="grey"
          value={
            "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
          }
          padding="10px"
        />
        <div className={styles.pricesAlign}>
          <Text color="#458C6B" value={"149.99$"} padding="10px" size="30px" />
          <Text
            color="grey"
            value={"169.99$"}
            padding="10px"
            textDecoration="line-through"
          />
        </div>

        <button className={styles.btnBuy}>
          <HiOutlineShoppingBag /> Add to Card
        </button>
      </div>
    </div>
  );
};

export default DiorCard;
