import React, { useEffect, useState } from "react";
import CampaignItems from "./CampaignItems";
import lekki from "../../assets/lekki.png";
import mongo from "../../assets/mongo.png";
import treasure from "../../assets/treasure.png";
import { IonList, IonAlert, IonLoading } from "@ionic/react";

const Campaign = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getCampaigns();
  }, []);

  const getCampaigns = async () => {
    try {
      setLoading(true);

      const response = await fetch(`https://app.pipeline.ng/api/Campaign/all`, {
        method: "POST",
        body: JSON.stringify({
          coyId: "10",
          // camapagnid: "string",
          // productId: "string",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data);
        throw new Error("Something went wrong");
      }

      setCampaigns(data.data);
    } catch (err: any) {
      console.log(err);
      setError(true);
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-5">
      {/* loading state indicator */}
      <IonLoading isOpen={loading} message={"Getting campaign list..."} />

      {/* error alert */}
      <IonAlert
        isOpen={error}
        onDidDismiss={() => setError(false)}
        header={"Error"}
        message={errorMessage}
        buttons={["OK"]}
      />
      <IonList className="flex flex-col gap-8" lines="none">
        {campaigns.map((item, index) => (
          <CampaignItems key={index} item={item} />
        ))}
      </IonList>
    </section>
  );
};

export default Campaign;
