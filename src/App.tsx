import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonTabs, IonTabBar, IonTabButton, IonRouterLink, IonButtons, IonMenuButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, information, logIn } from 'ionicons/icons'; // Import Ionicons icons
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import ClientList from './pages/clients/ClientList';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import NewClient from './pages/clients/NewClient';
import clientAddedSuccess from './pages/clients/clientAddedSuccess';
import ClientProfile from './pages/clients/ClientProfile';
import AttachClient from './pages/clients/AttachClient';
import ClientAtteched from './pages/clients/ClientAttached';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    
    <IonReactRouter>
      
      <IonRouterOutlet>
        
      </IonRouterOutlet>

    <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      <IonMenu contentId="main-content" onIonDidOpen={() => document.body.classList.add('menu-open')} onIonDidClose={() => document.body.classList.remove('menu-open')}>
        
        <IonContent>
          <IonList>
            <IonItem button routerLink="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem button routerLink="/about">
              <IonIcon icon={information} />
              <IonLabel>About</IonLabel>
            </IonItem>
            <IonItem button routerLink="/login">
              <IonIcon icon={logIn} />
              <IonLabel>Login</IonLabel>
            </IonItem>
          </IonList>
          
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="main-content">
        <Route path="/clientattached"  exact component={ClientAtteched} />
        <Route path="/attachclient"  exact component={AttachClient} />
        <Route path="/clientprofile"  exact component={ClientProfile} />
        <Route path="/clientadded"  exact component={clientAddedSuccess} />
        <Route path="/newclient"  exact component={NewClient} />
        <Route path="/clients"  exact component={ClientList} />
        <Route path="/home" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/login" component={Login} exact />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>

      

      <IonTabs>
        <IonRouterOutlet>
          
          <Route path="/home" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/login" component={Login} exact />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="about" href="/about">
            <IonIcon icon={information} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
          <IonTabButton tab="login" href="/login">
            <IonIcon icon={logIn} />
            <IonLabel>Login</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
