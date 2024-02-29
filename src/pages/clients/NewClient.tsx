import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import "./Clients.css"

const NewClient: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Add Client</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <small>Kindly fill the below form to register your client information</small>
                <IonList>
                    <IonItem>
                        <IonInput  placeholder="Firstname"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput  type="number" placeholder="Lastname"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput type="email" placeholder="Email address"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput type="tel" placeholder="Phone number"></IonInput>
                    </IonItem>

                    <div className='cli_reg_btn'>
                        <IonButton color="#FF6B00">Submit</IonButton>
                    </div>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default NewClient;