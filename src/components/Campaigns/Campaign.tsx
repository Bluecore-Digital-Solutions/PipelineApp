import React from "react";
import CampaignItems from "./CampaignItems";
import lekki from "../../assets/lekki.png";
import mongo from "../../assets/mongo.png";
import treasure from "../../assets/treasure.png";

const Campaign = () => {
  const items = [
    {
      name: "Mongo Park",
      location: "Ketu Epe",
      clients: 8,
      campaigns: 4,
      image: mongo,
    },
    {
      name: "Treasure Homes",
      location: "Ketu Epe",
      clients: 2,
      campaigns: 8,
      image: treasure,
    },
    {
      name: "Merry View Homes",
      location: "Ibeju Lekki",
      clients: 8,
      campaigns: 4,
      image: lekki,
    },
    {
      name: "Treasure Homes",
      location: "Ketu Epe",
      clients: 2,
      campaigns: 8,
      image: treasure,
    },
  ];
  return (
    <section className="px-5">
      <ul className="flex flex-col gap-8">
        {items.map((item, index) => (
          <CampaignItems key={index} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Campaign;
