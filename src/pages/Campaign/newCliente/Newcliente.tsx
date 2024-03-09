import { IonContent, IonHeader, IonImg, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router';
import NewCliente from '../../../components/campaign/newCliente/NewCliente';
import styles from "./Newcliente.module.css";

import back from "../../../assets/back.png";


const Newcliente: React.FC = () => {
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
                    <IonTitle className={styles.title}>Add New Client</IonTitle>
                </div>
            </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <NewCliente />
            </IonContent>
        </IonPage>
    );
};

export default Newcliente;