import { IonButton, IonContent, IonHeader, IonItem, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const AttachClient: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Page Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <small>Kindly select the clients you wish to attach to a specific products</small>

                <IonItem>
                    <IonSelect label="Products" labelPlacement="floating">
                    <IonSelectOption value="apple">Apple</IonSelectOption>
                    <IonSelectOption value="banana">Banana</IonSelectOption>
                    <IonSelectOption value="orange">Orange</IonSelectOption>
                    </IonSelect>
                </IonItem>

                <IonItem>
                    <IonSelect label="Client's Name" labelPlacement="floating">
                    <IonSelectOption value="apple">Apple</IonSelectOption>
                    <IonSelectOption value="banana">Banana</IonSelectOption>
                    <IonSelectOption value="orange">Orange</IonSelectOption>
                    </IonSelect>
                </IonItem>

                <IonButton style={{color:"#FF6B00"}} fill="clear">Add new client</IonButton>
                
                <div>
                    <IonButton color="#FF6B00" className="b__home__btn">Confirm</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default AttachClient;