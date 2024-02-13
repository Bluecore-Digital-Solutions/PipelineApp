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
import { useHistory } from "react-router";
import styles from "./NewClient.module.css";
import back from "../../../assets/back.png";
import NewClientsForm from "../../../components/clients/newClient/NewClientsForm";

const NewClientsPage: React.FC = () => {
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
            <IonTitle className={styles.title}>Add New Client</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <NewClientsForm />
      </IonContent>
    </IonPage>
  );
};

export default NewClientsPage;
