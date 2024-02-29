import React, { useEffect } from "react";
import { IonContent, IonPage } from "@ionic/react";
import ClientDetail from "../../../components/clients/clientDetail/ClientDetail";
import { useParams } from "react-router";

const ClientDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const getClientDetail = async () => {
    try {
      const response = await fetch(
        `https://app.pipeline.ng/api/client/getbyId`,
        {
          method: "POST",
          body: JSON.stringify({
            coyId: "10",
            clientId: `${id}`,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getClientDetail();
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <ClientDetail />
      </IonContent>
    </IonPage>
  );
};

export default ClientDetailPage;
