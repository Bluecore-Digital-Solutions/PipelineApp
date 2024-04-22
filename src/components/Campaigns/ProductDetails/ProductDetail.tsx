import React, { useState } from "react";
import mongo from "../../../assets/mongo.png";
import profile from "../../../assets/profile.png";
import location from "../../../assets/location.png";
import {
  IonImg,
  IonRouterLink,
  useIonViewWillEnter,
  IonLoading,
  IonAlert,
} from "@ionic/react";
import CampaignDesc from "./CampaignDesc";
import CampaignClients from "./CampaignClients";
import { useParams } from "react-router";

const ProductDetail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [campaign, setCampaign] = useState([]);
  const { id } = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    getCampaigns();
  });

  const getCampaigns = async () => {
    try {
      setLoading(true);

      const response = await fetch(`https://app.pipeline.ng/api/Campaign/all`, {
        method: "POST",
        body: JSON.stringify({
          coyId: "10",
          camapagnid: "string",
          productId: id,
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

      console.log(data);
      setCampaign(data.data);
    } catch (err: any) {
      console.log(err);
      setError(true);
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col gap-1 px-5 mb-5">
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
      {/* image */}
      <div className="flex flex-col gap-1">
        {/* product image */}
        <div className="w-full h-[20vh] rounded-md overflow-hidden">
          <IonImg
            className="w-full h-full object-cover"
            src={mongo}
            alt="campaign image"
          />
        </div>

        {/* product name */}
        <p className="text-lg font-bold">Mongo Park Estate</p>

        {/* location */}
        <div className="flex items-center gap-1">
          <IonImg
            className="h-[0.69rem] w-[0.875rem]"
            src={location}
            alt="location marker"
          />
          <p className="text-[0.8125rem]">
            Ketu-Epe, Lagos{" "}
            <span className="text-[#FF6B00] text-[0.625rem]">
              (Governor’s consent)
            </span>
          </p>
        </div>
      </div>

      {/* campaign description */}
      <CampaignDesc />

      {/* campaign clients */}
      <CampaignClients />

      {/* add client button */}
      <IonRouterLink
        routerLink={`/attatch-client`}
        className="self-center mt-3"
      >
        <div className="flex items-center justify-center gap-1 bg-[#FF6B00] text-white px-2 py-1 rounded-md">
          <p className="text-xs">Add Client</p>
          <IonImg src={profile} alt="prfile icon" />
        </div>
      </IonRouterLink>
    </section>
  );
};

export default ProductDetail;
