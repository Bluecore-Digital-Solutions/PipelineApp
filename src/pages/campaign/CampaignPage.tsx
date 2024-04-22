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
import image from "../../assets/back.png";
import styles from "./CampaignPage.module.css";
import Campaign from "../../components/Campaigns/Campaign";
import { useHistory } from "react-router";

const CampaignPage: React.FC = () => {
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
            <IonTitle className={styles.title}>Campaigns</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Campaign />
      </IonContent>
    </IonPage>
  );
};

export default CampaignPage;
