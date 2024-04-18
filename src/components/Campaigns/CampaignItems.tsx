import React from "react";
import location from "../../assets/location.png";
import next from "../../assets/next-arrow.png";
import { IonRouterLink, IonImg } from "@ionic/react";

type CampaignProps = {
  item: {
    name: string;
    location: string;
    clients: number;
    campaigns: number;
    image: string;
  };
};

const CampaignItems = (props: CampaignProps) => {
  return (
    <li className="flex flex-col gap-2">
      <div className="relative h-[25vh] rounded-md overflow-hidden font-[500]">
        {/* modal */}
        <div className="absolute bg-[#00000066] top-0 bottom-0 w-full text-white px-4 pt-16">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              {/* name */}
              <p className="text-lg font-semibold">{props.item.name}</p>

              {/* loaction */}
              <div className="flex gap-1 items-center">
                <IonImg
                  className="w-[11px] h-[15px]"
                  src={location}
                  alt="location marker"
                />
                <p className="text-xs">{props.item.location}</p>
              </div>
            </div>

            <div className="flex gap-2 items-center text-[0.63rem]">
              <p className="bg-white rounded-full px-2 py-[0.1rem] text-black">
                Clients: {props.item.clients}
              </p>
              <p className="bg-white rounded-full px-2 py-[0.1rem] text-[#FF5C00]">
                Campaigns: {props.item.campaigns}
              </p>
            </div>
          </div>
        </div>

        {/* image */}
        <div className=" w-full h-full object-contain">
          <IonImg
            className="w-full h-full object-cover"
            src={props.item.image}
            alt={props.item.name}
          />
        </div>
      </div>

      <IonRouterLink routerLink={`/campaigns/details/${props.item.name}`}>
        <div className="flex items-center gap-2 justify-end">
          <img src={next} alt="next icon" />
          <p className="text-black text-[0.63rem]">View Product</p>
        </div>
      </IonRouterLink>
    </li>
  );
};

export default CampaignItems;
