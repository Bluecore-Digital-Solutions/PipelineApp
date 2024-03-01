import {
  IonBackButton,
  IonButton,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import './UpgradePlan.css';

const UpgradePlan: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton className='button-1' slot='start'>
            <IonBackButton
              className='back'
              defaultHref='/subcription'
            ></IonBackButton>
          </IonButton>
          <IonTitle>Upgrade/Plan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <form>
          <IonList style={{ paddingTop: '20px', paddingBottom: '20px' }}>
            <IonItem className='item'>
              <label htmlFor=''>Marketers Name</label>
              <IonInput type='text' fill='outline' disabled></IonInput>
            </IonItem>
            <IonItem className='item'>
              <label>Current Plan</label>
              <IonInput
                className='custom-input'
                type='text'
                fill='outline'
                disabled
              />
            </IonItem>
            <IonItem>
              <label>New plan</label>
              <IonInput className='custom-input' type='text' fill='outline' />
            </IonItem>
            <IonItem className='item'>
              <label htmlFor=''>Duration</label>
              <IonInput
                className='custom-input'
                type='text'
                fill='outline'
                disabled
              />
            </IonItem>
            <IonItem className='item'>
              <label>Amount</label>
              <IonInput
                className='custom-input'
                type='text'
                fill='outline'
                disabled
              />
            </IonItem>
            <IonItem className='item'>
              <label htmlFor=''>Plan expiring date</label>
              <IonInput
                className='custom-input'
                type='text'
                fill='outline'
                disabled
              />
            </IonItem>
            <IonItem className='item'>
              <label htmlFor=''>Preferred payment method</label>
              <IonInput
                className='custom-input'
                type='text'
                fill='outline'
                disabled
              />
            </IonItem>
            <IonItem className='item'>
              <IonCheckbox />
              <IonLabel style={{ marginLeft: '8px' }}>
                I agree to the terms and conditions
              </IonLabel>
            </IonItem>
            <IonItem className='item'>
              <IonCheckbox />
              <IonLabel style={{ marginLeft: '8px' }}>
                Auto-debit my card for renewal
              </IonLabel>
            </IonItem>
            <div className='c-button'>
              <IonButton className='custom-btn'>Continue</IonButton>
            </div>
          </IonList>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default UpgradePlan;
