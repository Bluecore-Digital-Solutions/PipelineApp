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
import image from "../../../assets/back.png";
import styles from "./UpgradeRenew.module.css";
import { useHistory } from "react-router";
import UpgradeRenewForm from "../../../components/Subscription/UpgradeRenew/UpgradeRenewForm";

const UpgradeRenewPage: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <div className={styles.header}>
            {/* subscription header */}
            <IonRouterLink
              onClick={() => history.goBack()}
              className={styles.link}
            >
              <IonImg className={styles["back__icon"]} src={image} />
            </IonRouterLink>
            <IonTitle className={styles.title}>Upgrade / Renew Plan</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <UpgradeRenewForm />
      </IonContent>
    </IonPage>
  );
};

export default UpgradeRenewPage;
