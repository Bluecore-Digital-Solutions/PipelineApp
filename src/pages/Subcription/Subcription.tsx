import {
  IonBackButton,
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack, arrowForward } from "ionicons/icons";
import React from "react";
import "./Subcription.css";
// import '../theme/variables.css';

const Subscription: React.FC = () => {
  // const handleClick = () =>{

  // }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton className="button-1" slot="start">
            <IonBackButton className="back" defaultHref="/home"></IonBackButton>
            {/* <IonIcon className='back' defaultHref='/home' icon={arrowBack} /> */}
          </IonButton>
          <IonTitle>Subscription</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="custom-list">
          <div className="sub-menu">
            <div className="writeup">Subcription level</div>
            <a className="button-2" href="/upgrade" role="button">
              Upgrade/renew <IonIcon icon={arrowForward} />
            </a>
          </div>
          <div className="click-option">
            <div className="click-item">
              <div className="circle"></div>
              <p>Bronze</p>
            </div>
            <div className="line"></div>
            <div className="click-item">
              <div className="circle"></div>
              <p>Silver</p>
            </div>
            <div className="line"></div>
            <div className="click-item">
              <div className="circle"></div>
              <p>Gold</p>
            </div>
            <div className="line"></div>
            <div className="click-item">
              <div className="circle"></div>
              <p>Platinum</p>
            </div>
            <div className="line"></div>
            <div className="click-item">
              <div className="circle"></div>
              <p>Sapphire</p>
            </div>
          </div>
        </IonList>
        <div className="plan">
          <div className="plan-menu ion-padding ">
            <div className="plan-item">Gold PLAN</div>
            <div>
              <a className="upgrade-btn" href="/upgrade" role="button">
                Upgrade/renew
              </a>
            </div>
          </div>
          <IonList className="plan ion-padding">
            <p>Dec 2023</p>
            <p>Silver plan upgrade</p>
            <div className="approved">
              <p slot="start">N10,000</p>
              <p className="approved-p">Approved</p>
            </div>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Subscription;
