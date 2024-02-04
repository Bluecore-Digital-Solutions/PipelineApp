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

  const addNewClient = async () => {
    try {
      const response = await fetch("https://app.pipeline.ng/api/client/add", {
        method: "POST",
        body: JSON.stringify({
          coyId: 10,
          clientName: "Fortune Oliseyenum",
          mobileNo: "09041549081",
          email: "kingjasper.dev@gmail.com",
          dob: "15/03/2000",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  // addNewClient();

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
