import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonRouterLink,
} from "@ionic/react";
import back from "../../../assets/back.png";
import styles from "./AttatchClient.module.css";
import { useHistory } from "react-router-dom";
import AttctchClient from "../../../components/clients/attatchClient/AttctchClient";

const AttatchClientsPage: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <div className={styles.header}>
            <IonRouterLink
              onClick={() => history.goBack()}
              className={styles.link}
            >
              <IonImg className={styles["back__icon"]} src={back} />
            </IonRouterLink>
            <IonTitle className={styles.title}>Attach Client</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <AttctchClient />
      </IonContent>
    </IonPage>
  );
};

export default AttatchClientsPage;
