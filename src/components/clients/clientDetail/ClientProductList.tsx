import React from "react";
import { IonImg, IonItem, IonList } from "@ionic/react";
import styles from "./ProductList.module.css";
import { productList } from "./productarray";
import location from "../../../assets/location.png";
import sun from "../../../assets/sun.png";
import video from "../../../assets/video.png";
import five from "../../../assets/500 sqm.png";
import grid from "../../../assets/grid.png";
import heart from "../../../assets/heart.png";

const ClientProductList = () => {
  return (
    <ul className={styles.list}>
      {productList.map((product) => (
        <li key={product.id} className={styles["product__item"]}>
          <div className={styles["product__item-top"]}>
            <IonImg
              src={product.image}
              alt={product.name}
              className={styles["product__img"]}
            />
            <p className={styles["product__name"]}>{product.name}</p>
            <div className={styles.location}>
              <IonImg
                className={styles["location__Img"]}
                src={location}
                alt="location marker"
              />
              <p>{product.loaction}</p>
            </div>
          </div>

          <div className={styles["product__item-bottom"]}>
            <div className={styles["img__container"]}>
              <IonImg className={styles.img} src={sun} />
            </div>
            <div className={styles["img__container"]}>
              <IonImg className={styles.img} src={video} />
            </div>
            <div className={styles["img__container"]}>
              <IonImg className={styles.img} src={grid} />
            </div>
            <div className={styles["img__container"]}>
              <IonImg className={styles.img} src={five} />
            </div>
            <div className={styles["img__container"]}>
              <IonImg className={styles.img} src={heart} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ClientProductList;
