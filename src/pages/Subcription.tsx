import {
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
} from '@ionic/react';
import { arrowBack, arrowForward } from 'ionicons/icons';
import React from 'react';
import './Subcription.css';

const Subscription: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='ion-padding'>
          <IonIcon icon={arrowBack} slot='start' />
          <IonTitle>Subscription</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonList className='custom-list'>
          <IonRow className='ion-justify-content-between'>
            <IonCol size='3' className='writeup'>
              Subcription level
            </IonCol>
            <IonCol size='4'>
              <IonButton>
                Upgrade/review <IonIcon icon={arrowForward} />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRadioGroup className='custom-rg'>
            <IonItem className='custom-item'>
              <IonRadio slot='start' value='bronze' className='custom-radio' />
              <IonLabel className='custom-label'>Bronze</IonLabel>
            </IonItem>
            <IonItem className='custom-item'>
              <IonRadio slot='start' value='silver' className='custom-radio' />
              <IonLabel className='custom-label'>Silver</IonLabel>
            </IonItem>
            <IonItem className='custom-item'>
              <IonRadio slot='start' value='gold' className='custom-radio' />
              <IonLabel className='custom-label'>Gold</IonLabel>
            </IonItem>
            <IonItem className='custom-item'>
              <IonRadio
                slot='start'
                value='platinum'
                className='custom-radio'
              />
              <IonLabel className='custom-label'>Platinum</IonLabel>
            </IonItem>
            <IonItem className='custom-item'>
              <IonRadio slot='start' value='sappire' className='custom-radio' />
              <IonLabel className='custom-label'>Sapphire</IonLabel>
            </IonItem>
          </IonRadioGroup>
        </IonList>
        <div className='plan'>
          <IonRow>
            <IonCol>
              <p>Gold PLAN</p>
            </IonCol>
            <IonCol>
              <IonButton>
                Upgrade/review <IonIcon icon={arrowForward} />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonList className='plan'>
            <p>Dec 2023</p>
            <p>Silver plan upgrade</p>
            <div className='approved'>
              <p slot='start'>N10,000</p>
              <p className='approved-p'>Approved</p>
            </div>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Subscription;
