import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonRouterLink,
  // IonButton,
} from "@ionic/react";
import ClientList from "../../../components/clients/clientList/ClientList";
import styles from "./Clientlist.module.css";
import image from "../../../assets/back.png";

const ClientsListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <div className={styles.header}>
            {/* left side of clients header */}
            <div className={styles["header__left"]}>
              <IonImg className={styles["back__icon"]} src={image} />
              <IonTitle className={styles.title}>Clients</IonTitle>
            </div>

            {/* right side of clients header */}
            <IonRouterLink routerLink="/new-clients" className={styles.link}>
              Add New Clients
            </IonRouterLink>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ClientList />
      </IonContent>
    </IonPage>
  );
};

export default ClientsListPage;
