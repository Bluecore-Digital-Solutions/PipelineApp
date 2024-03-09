import { IonContent, IonHeader, IonImg, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import styles from "./AttachaClient.module.css";
import back from "../../../assets/back.png";
import { useHistory } from 'react-router';
import AttachAClient from '../../../components/campaign/attachClient/AttachAClient';


const Attachaclient: React.FC = () => {
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
                    <IonTitle className={styles.title}>Add Client</IonTitle>
                    
                </div>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <AttachAClient></AttachAClient>
            </IonContent>

        </IonPage>
    );
};

export default Attachaclient;