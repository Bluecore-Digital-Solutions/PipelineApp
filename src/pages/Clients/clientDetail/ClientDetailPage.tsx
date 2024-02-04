import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import ClientDetail from "../../../components/clients/clientDetail/ClientDetail";
import { useParams } from "react-router";

const ClientDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <IonPage>
      <IonContent fullscreen>
        <ClientDetail />
      </IonContent>
    </IonPage>
  );
};

export default ClientDetailPage;
