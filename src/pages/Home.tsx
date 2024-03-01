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
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
} from '@ionic/react';
import { home, information, logIn } from 'ionicons/icons'; // Import Ionicons icons
// import Home from '../pages/Home'
import About from './About';
import Login from './Login';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { IonSearchbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonReactRouter>
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

        <IonRouterOutlet>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} exact />
          <Route path='/login' component={Login} exact />
          <Route exact path='/' render={() => <Redirect to='/home' />} />
        </IonRouterOutlet>
        <IonTabBar slot='bottom'>
          <IonTabButton tab='home' href='/home'>
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab='about' href='/about'>
            <IonIcon icon={information} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
          <IonTabButton tab='login' href='/login'>
            <IonIcon icon={logIn} />
            <IonLabel>Login</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonReactRouter>
    </IonPage>
  );
};

export default Home;
