import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonRouterLink,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, information, logIn } from "ionicons/icons"; // Import Ionicons icons
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

// clients section
import ClientsListPage from "./pages/Clients/clientlist/ClientsList";
import NewClientsPage from "./pages/Clients/newClient/NewClients";
import ClientDetailPage from "./pages/Clients/clientDetail/ClientDetailPage";
import AttatchClientsPage from "./pages/Clients/attatchClient/AttatchClient";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonMenu
        contentId="main-content"
        onIonDidOpen={() => document.body.classList.add("menu-open")}
        onIonDidClose={() => document.body.classList.remove("menu-open")}
      >
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

          {/* clients page routes */}
          <Route path="/client">
            <ClientsListPage />
          </Route>
          <Route path="/new-clients">
            <NewClientsPage />
          </Route>
          <Route path="/details/:id">
            <ClientDetailPage />
          </Route>
          <Route path="/attatch-client">
            <AttatchClientsPage />
          </Route>
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
