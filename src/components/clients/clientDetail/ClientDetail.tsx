import React from "react";
import { IonImg, IonRouterLink } from "@ionic/react";
import styles from "./ClientDetail.module.css";
import ebere from "../../../assets/ebere.png";
import location from "../../../assets/location.png";
import ClientProductList from "./ClientProductList";

const ClientDetail = () => {
  return (
    <section>
      {/* header section */}
      <header className={styles.header}>
        <IonImg className={styles["header__img"]} src={ebere} alt={ebere} />
        <h3>Ebere Juiet</h3>
        <p>
          <span className={styles.active}></span>
          <span>Active</span>
        </p>
      </header>

      {/* contact details */}
      <div className={styles.contact}>
        {/* contact__top section */}
        <div className={styles["contact__top"]}>
          <div className={styles["contact__top-left"]}>
            <IonImg
              className={styles["loaction__marker"]}
              src={location}
              alt="location marker"
            />
            <div className={styles.address}>
              <p>Lagos, Nigeria</p>
              <p className={styles.email}>eberejuliet@gmail.com</p>
            </div>
          </div>
          <div className={styles["contact__top-center"]}></div>
          <div className={styles["contact__top-right"]}>
            <p>+234 (0) 802 000 0000</p>
            <p>14th December, 1985</p>
          </div>
        </div>

        {/* contact__bottom section */}
        <div className={styles["contact__bottom"]}>
          <p>Edit Profile</p>
        </div>
      </div>

      {/* line__break */}
      <div className={styles["line__break"]}></div>

      {/* clients product */}
      <div className={styles["client__product"]}>
        <div className={styles["client__product-heading"]}>
          <p>Clients Products</p>
          <IonRouterLink routerLink="/see-all" className={styles.seeall}>
            <p>See all</p>
          </IonRouterLink>
        </div>

        {/* client product list */}
        <ClientProductList />
        <div className={styles["button__container"]}>
          <IonRouterLink routerLink="/attatch-client" className={styles.submit}>
            Attach client to a new products
          </IonRouterLink>
        </div>
      </div>
    </section>
  );
};

export default ClientDetail;
