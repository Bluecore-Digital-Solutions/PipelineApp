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
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-padding">
          <IonButton className="button-1" slot="start">
            <IonBackButton className="back" defaultHref="/home"></IonBackButton>
            {/* <IonIcon className='back' defaultHref='/home' icon={arrowBack} /> */}
          </IonButton>
          <IonTitle>Subscription</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList className="custom-list">
          <div className="sub-menu">
            <div className="writeup">Subcription level</div>
            <div className="button-2" role="button">
              Upgrade/review <IonIcon icon={arrowForward} />
            </div>
          </div>
          <div className="click-option">
            <div className="click-item">
              <input type="radio" name="bronze" id="bronze" value="bronze" />
              <label className="label-item" id="bronze">
                Bronze
              </label>
            </div>
            <div className="click-item">
              <input type="radio" name="bronze" id="silver" value="silver" />
              <label className="label-item">Silver</label>
            </div>
            <div className="click-item">
              <input type="radio" name="bronze" id="gold" value="gold" />
              <label className="label-item" id="gold">
                Gold
              </label>
            </div>
            <div className="click-item">
              <input
                type="radio"
                name="bronze"
                id="platinum"
                value="platinum"
              />
              <label className="label-item">Platinum</label>
            </div>
            <div className="click-item">
              <input type="radio" name="bronze" id="sappire" value="sappire" />
              <label className="label-item">Sapphire</label>
            </div>
          </div>
        </IonList>
        <div className="plan">
          <div className="plan-menu">
            <div className="plan-item">Gold PLAN</div>
            <div>
              <div className="upgrade-btn">Upgrade/review</div>
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
