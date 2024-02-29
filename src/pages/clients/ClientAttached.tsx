import { IonButton, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Flower from "../../assets/pipelineFlower.png";


const ClientAtteched: React.FC = () => {

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
                        Client Attachment Successful
                    </h1>
                    <h1 className='success__msg'>You have successfully attached  Emeka John 
                        to Mongo Park Estate, you can now 
                        manage this client easily.
                    </h1>
                    <IonButton color="#FF6B00" className="b__home__btn">Go back home</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ClientAtteched;