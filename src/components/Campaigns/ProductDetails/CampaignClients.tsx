import React from "react";
import down from "../../../assets/down.png";
import ebera from "../../../assets/ebere.png";
import { IonImg, IonRouterLink } from "@ionic/react";

const CampaignClients = () => {
  const clients = [
    {
      name: "Maduka Daniel",
      email: "madukadaniel01@gmail.com",
      number: "+234 (0) 800 000 2000",
    },
    {
      name: "Ebere Juliet",
      email: "meberedajuliet@gmail.com",
      number: "+234 (0) 800 000 2000",
    },
    {
      name: "Maduka Daniel",
      email: "madukadaniel01@gmail.com",
      number: "+234 (0) 800 000 2000",
    },
  ];

  return (
    <div className="flex flex-col gap-4 mt-5">
      <div className="flex items-center justify-between p-2 bg-[#FF7A001F] rounded-md">
        <h4 className="text-xs">Campaigns</h4>
        <IonImg
          className="w-[0.625rem] h-[0.437rem]"
          src={down}
          alt="chevron icon"
        />
      </div>

      {/* client list */}
      <ul className="flex flex-col gap-4">
        {clients.map((client, index) => (
          <li className="flex gap-3" key={index}>
            {/* image */}
            <div>
              <IonImg src={ebera} alt={client.name} />
            </div>

            {/* details */}
            <div className="flex flex-col text-[0.625rem] font-semibold">
              <p className="text-xs">{client.name}</p>
              <p>{client.email}</p>
              <p>{client.number}</p>
              <IonRouterLink routerLink={`/attatch-client`}>
                <p className="text-[#FF5C00]">View/Edit</p>
              </IonRouterLink>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignClients;
