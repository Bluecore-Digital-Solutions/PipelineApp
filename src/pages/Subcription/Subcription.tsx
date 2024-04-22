import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
} from "@ionic/react";
import image from "../../assets/back.png";
import styles from "./Subcription.module.css";
import Subscription from "../../components/Subscription/Subscription";

const SubcriptionPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <div className={styles.header}>
            {/* subscription header */}
            <IonImg className={styles["back__icon"]} src={image} />
            <IonTitle className={styles.title}>Subscription</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Subscription />
      </IonContent>
    </IonPage>
  );
};

export default SubcriptionPage;
