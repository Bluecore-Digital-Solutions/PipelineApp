import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import './Success.css';

const Success: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="success">
          <IonImg className="custom-img" src="assets/image.png"></IonImg>
          <h1>Upgrade successfully</h1>
          <p>
            You have successfully upgrade your account to platinum plan, you now
            have access to more features and benefits
          </p>
          <IonButton className="back-home" href="/home">
            Go back home
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Success;
