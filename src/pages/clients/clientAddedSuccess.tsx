import { IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Flower from "../../assets/pipelineFlower.png";

const clientAddedSuccess: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Added successfully</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <div className='success__message__content'>
                    <IonImg src={Flower} className="success__img"></IonImg>
                    <h1 style={{fontWeight:"bold"}}>
                        New Client Added Successfully
                    </h1>
                    <h1 className='success__msg'>You have successfully registered Emeka John under as your client. You can now manage this client from your dashboard</h1>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default clientAddedSuccess;