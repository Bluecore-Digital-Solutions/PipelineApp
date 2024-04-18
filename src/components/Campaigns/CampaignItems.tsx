import React from "react";
import location from "../../assets/location.png";
import next from "../../assets/next-arrow.png";
import { IonRouterLink, IonImg, IonItem } from "@ionic/react";
import treasure from "../../assets/treasure.png";

type CampaignProps = {
  item: {
    campaignType: string;
    content: string;
    coyId: number;
    dateCreated: Date;
    daysAfter: string;
    id: number;
    position: string;
    productId: number;
    uniqueId: string;
  };
};

const CampaignItems = (props: CampaignProps) => {
  console.log(props.item);
  return (
    <IonItem>
      <div className="flex flex-col gap-2 w-full">
        <div className="relative h-[25vh] rounded-md overflow-hidden font-[500]">
          {/* modal */}
          <div className="absolute bg-[#00000066] top-0 bottom-0 w-full text-white px-4 pt-16">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                {/* name */}
                <p className="text-lg font-semibold">Mongo Park</p>

                {/* loaction */}
                <div className="flex gap-1 items-center">
                  <IonImg
                    className="w-[11px] h-[15px]"
                    src={location}
                    alt="location marker"
                  />
                  <p className="text-xs">Ketu Epe</p>
                </div>
              </div>

              <div className="flex gap-2 items-center text-[0.63rem]">
                <p className="bg-white rounded-full px-2 py-[0.1rem] text-black">
                  Clients: 8
                </p>
                <p className="bg-white rounded-full px-2 py-[0.1rem] text-[#FF5C00]">
                  Campaigns: 4
                </p>
              </div>
            </div>
          </div>

          {/* image */}
          <div className=" w-full h-full object-contain">
            <IonImg
              className="w-full h-full object-cover"
              src={treasure}
              alt="treasure"
            />
          </div>
        </div>

        <IonRouterLink routerLink={`/campaigns/details/treasure`}>
          <div className="flex items-center gap-2 justify-end">
            <img src={next} alt="next icon" />
            <p className="text-black text-[0.63rem]">View Product</p>
          </div>
        </IonRouterLink>
      </div>
    </IonItem>
  );
};

export default CampaignItems;
