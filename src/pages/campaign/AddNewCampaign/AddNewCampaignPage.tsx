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
import styles from "./AddNewCampaign.module.css";
import AddNewCampaign from "../../../components/Campaigns/AddNewCampaign/AddNewCampaign";
import { useHistory } from "react-router";

const AddNewCampaignPage: React.FC = () => {
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
            <IonTitle className={styles.title}>Add New Campaign</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <AddNewCampaign />
      </IonContent>
    </IonPage>
  );
};

export default AddNewCampaignPage;
