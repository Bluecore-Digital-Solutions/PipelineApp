import { IonContent, IonHeader, IonImg, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import back from "../../../assets/back.png";
import AddNewCampaign from '../../../components/campaign/addNewCampaign/AddNewCampaign';

const NewCampaign: React.FC = () => {

    return (
        <IonPage>
            <IonHeader class="ion-no-border">
                <IonToolbar>
                <div className=".header">
                    <IonRouterLink
                    // onClick={() => history.goBack()}
                    className=".link"
                    >
                    {/* <IonImg className=".back__icon" src={back} /> */}
                    </IonRouterLink>
                    <IonTitle className="title">Add New Campaign</IonTitle>
                </div>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <AddNewCampaign />
            </IonContent>
        </IonPage>
    );
};

export default NewCampaign;