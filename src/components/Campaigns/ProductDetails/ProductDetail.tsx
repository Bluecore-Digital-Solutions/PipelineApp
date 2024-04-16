import React from "react";
import mongo from "../../../assets/mongo.png";
import profile from "../../../assets/profile.png";
import location from "../../../assets/location.png";
import { IonImg, IonRouterLink } from "@ionic/react";
import CampaignDesc from "./CampaignDesc";
import CampaignClients from "./CampaignClients";

const ProductDetail = () => {
  return (
    <section className="flex flex-col gap-1 px-5 mb-5">
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
