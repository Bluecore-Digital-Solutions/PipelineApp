import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import ClientDetail from "../../../components/clients/clientDetail/ClientDetail";

const ClientDetailPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ClientDetail />
      </IonContent>
    </IonPage>
  );
};

export default ClientDetailPage;
