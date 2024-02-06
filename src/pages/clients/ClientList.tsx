import { IonContent, IonHeader, IonPage, IonTitle, IonItem, IonAvatar, IonLabel, IonToolbar, IonSearchbar, IonButtons, IonBackButton, IonButton, IonIcon } from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';
import React from 'react';

const ClientList: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton defaultHref="#"></IonBackButton>
            </IonButtons>
            <IonTitle>Clients</IonTitle>
            
            <IonButtons slot="end">
                <IonButton>Add New Clients</IonButton>
            </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <section className='new__client__btn'>
          <h1>Clients</h1>
          <a href="/newclient">Add New clients</a>
        </section>
        <IonSearchbar></IonSearchbar>

        <IonItem>
          <IonAvatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          <div className='client__d'>
            <IonLabel>Ebere Juliet</IonLabel>
            <small>eberejuliet@gmail.com</small>
          </div>
          <IonIcon slot='end'  icon={arrowForwardOutline} className="cl__arrow"></IonIcon>
        </IonItem>

        <IonItem>
          <IonAvatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          <div className='client__d'>
            <IonLabel>Maduka Daniel</IonLabel>
            <small>madukadaniel@gmail.com</small>
          </div>
          
          <IonIcon slot='end'  icon={arrowForwardOutline} className="cl__arrow"></IonIcon>
        </IonItem>

        <IonItem>
          <IonAvatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          <div className='client__d'>
            <IonLabel>Adeola Benjamin Juliet</IonLabel>
            <small>adeolabenjamin@gmail.com</small>
          </div>
          

          <IonIcon slot='end'  icon={arrowForwardOutline} className="cl__arrow"></IonIcon>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default ClientList;