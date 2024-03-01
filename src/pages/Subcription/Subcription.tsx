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
} from '@ionic/react';
import { arrowBack, arrowForward } from 'ionicons/icons';
import React from 'react';
import './Subcription.css';
// import '../theme/variables.css';

const Subscription: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='ion-padding'>
          <IonButton className='button-1' slot='start'>
            <IonBackButton className='back' defaultHref='/home'></IonBackButton>
            {/* <IonIcon className='back' defaultHref='/home' icon={arrowBack} /> */}
          </IonButton>
          <IonTitle>Subscription</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonList className='custom-list'>
          <div className='sub-menu'>
            <div className='writeup'>Subcription level</div>
            <div className='button-2' role='button'>
              Upgrade/review <IonIcon icon={arrowForward} />
            </div>
          </div>

          {/* <IonRadioGroup className='custom-rg'>
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
          </IonRadioGroup> */}
          <div className='click-option'>
            <div className='click-item'>
              <input type='radio' id='bronze' value='bronze' />
              <label className='label-item'>Bronze</label>
            </div>
            <div className='click-item'>
              <input type='radio' value='silver' />
              <label className='label-item'>Silver</label>
            </div>
            <div className='click-item'>
              <input type='radio' value='gold' checked />
              <label className='label-item'>Gold</label>
            </div>
            <div className='click-item'>
              <input type='radio' value='platinum' />
              <label className='label-item'>Platinum</label>
            </div>
            <div className='click-item'>
              <input type='radio' value='sappire' />
              <label className='label-item'>Sapphire</label>
            </div>
          </div>
        </IonList>
        <div className='plan'>
          <div className='plan-menu'>
            <div className='plan-item'>Gold PLAN</div>
            <div>
              <div className='upgrade-btn'>Upgrade/review</div>
            </div>
          </div>
          <IonList className='plan ion-padding'>
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
