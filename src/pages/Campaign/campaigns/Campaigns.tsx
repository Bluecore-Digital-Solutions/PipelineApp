import { IonContent, IonHeader, IonImg, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import styles from "./Campaigns.module.css";
import { useHistory } from 'react-router';
import back from "../../../assets/back.png";
import CampaignList from '../../../components/campaign/campaignList/CampaignList';

const Campaigns: React.FC = () => {

    const navigate = useHistory();

    return (
        <IonPage>
            <IonHeader class="ion-no-border">
                <IonToolbar>
                <div className={styles.header}>
                    <IonRouterLink
                    onClick={() => navigate.goBack()}
                    className=".link"
                    >
                        <IonImg className={styles["back__icon"]} src={back} />
                    </IonRouterLink>
                    <IonTitle className={styles.title}>Campaigns</IonTitle>
                </div>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <CampaignList />
            </IonContent>
        </IonPage>
    );
};

export default Campaigns;