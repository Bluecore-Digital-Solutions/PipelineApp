import React, { useState } from "react";
import {
  IonImg,
  IonSearchbar,
  IonItem,
  IonList,
  IonLabel,
  IonRouterLink,
} from "@ionic/react";
import styles from "./Clientlist.module.css";
import { clients } from "./clientarray";
import next from "../../../assets/next-icon.png";

const ClientList = () => {
  const handleSearchbarChange = (event: CustomEvent) => {
    console.log(event.detail.value);
    // You can perform additional actions here based on the changed value
  };

  return (
    <section className="containe">
      {/* search bar */}
      <div className={styles["search-comp"]}>
        <IonSearchbar
          onIonChange={handleSearchbarChange}
          showClearButton="always"
          class="ion-no-border"
          placeholder="Search Clients"
        ></IonSearchbar>
      </div>

      {/* clients list */}
      <IonList lines="none">
        {clients.map((client) => (
          <IonRouterLink
            key={client.id}
            className={styles["link__container"]}
            routerLink={`/details/${client.id}`}
          >
            <IonItem className={styles["client__item"]} key={client.id}>
              <div className={styles["client__item-l"]}>
                <IonImg
                  className={styles["client__img"]}
                  src={client.image}
                  alt={client.name}
                />
                <div className={styles["client__item-r"]}>
                  <p>{client.name}</p>
                  <small>{client.email}</small>
                </div>
              </div>
              <IonImg className={styles["next__icon"]} src={next} />
            </IonItem>
          </IonRouterLink>
        ))}
      </IonList>
    </section>
  );
};

export default ClientList;
