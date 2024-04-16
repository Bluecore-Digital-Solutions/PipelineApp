import React from "react";
import down from "../../../assets/down.png";
import { IonImg } from "@ionic/react";

const CampaignDesc = () => {
  const items = [{}, {}, {}];

  return (
    <div className="flex flex-col gap-2 mt-5">
      <div className="flex items-center justify-between p-2 bg-[#FF7A001F] rounded-md">
        <h4 className="text-xs">Campaigns</h4>
        <IonImg
          className="w-[0.625rem] h-[0.437rem]"
          src={down}
          alt="chevron icon"
        />
      </div>

      {/* list items */}
      <ul className="flex flex-col gap-1 mx-5 list-disc">
        {items.map((item, index) => (
          <li className="text-[0.625rem]" key={index}>
            Filler text is text that shares some characteristics of a real
            written text, but is random or otherwise generated
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignDesc;
