import React from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { home, information, logIn } from 'ionicons/icons'; // Import Ionicons icons
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import '../theme/variables.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonMenu
        contentId='main-content'
        onIonDidOpen={() => document.body.classList.add('menu-open')}
        onIonDidClose={() => document.body.classList.remove('menu-open')}
      >
        <IonContent>
          <IonList>
            <IonItem button routerLink='/home'>
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem button routerLink='/about'>
              <IonIcon icon={information} />
              <IonLabel>About</IonLabel>
            </IonItem>
            <IonItem button routerLink='/login'>
              <IonIcon icon={logIn} />
              <IonLabel>Login</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonContent fullscreen>
        <div id='container'>
          <strong>This is Home Page</strong>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
