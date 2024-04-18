import React, { useState, useEffect } from "react";
import styles from "./Subscription.module.css";
import nextYellow from "../../assets/yellow-next.png";
import check from "../../assets/check.png";
import { IonImg, IonRouterLink } from "@ionic/react";
import SubscriptionList from "./SubscriptionList";

const Subscription = () => {
  const [level, setLevel] = useState<number>(2);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getSubscription();
  }, []);

  const getSubscription = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://app.pipeline.ng/api/Subscription/all`,
        {
          method: "POST",
          body: JSON.stringify({
            coyId: "10",
            // marketerId: "string",
            // tranxid: "string",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      console.log(data);

      if (!response.ok) {
        throw new Error();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      {/* level container */}
      <div className={styles["sub__level"]}>
        {/* subscription level */}
        <div className="flex items-center justify-between text-xs font-bold">
          <p className="">Subscription Level</p>
          <IonRouterLink routerLink={`/subscription/upgrade-renew`}>
            <div className="flex items-center justify-center gap-2">
              <p className="text-[#FBE200]">Upgrade/Renew</p>
              <IonImg
                className="h-[0.75rem] w-[0.625rem]"
                src={nextYellow}
                alt="next-icon"
              />
            </div>
          </IonRouterLink>
        </div>

        {/* subscription level */}
        <div className="relative mt-5">
          {/* lines */}
          <div className="absolute flex items-center justify-between bg-red-400 w-[90%] left-[5%] z-[10]">
            <div
              className={`${
                level > 1 ? "h-[2px] bg-white" : "h-[1px] bg-gray-300"
              } w-[25%] `}
            ></div>
            <div
              className={`${
                level > 2 ? "h-[2px] bg-white" : "h-[1px] bg-gray-300"
              } w-[25%] `}
            ></div>
            <div
              className={`${
                level > 3 ? "h-[2px] bg-white" : "h-[1px] bg-gray-300"
              } w-[25%] `}
            ></div>
            <div
              className={`${
                level > 4 ? "h-[2px] bg-white" : "h-[1px] bg-gray-300"
              } w-[25%] `}
            ></div>
          </div>
        </div>

        {/* levels */}
        <div className="flex justify-between items-center text-[8px] -mt-2">
          <div className="flex flex-col gap-2 w-[10%] items-center">
            <div className="flex items-center justify-center h-5 w-5 bg-white rounded-full z-[100]">
              {level > 0 && (
                <IonImg className="h-2 w-2" src={check} alt="check-icon" />
              )}
            </div>
            <p>Bronze</p>
          </div>
          <div className="flex flex-col gap-2 w-[10%] items-center">
            <div className="flex items-center justify-center h-5 w-5 bg-white rounded-full z-[100]">
              {level > 1 && (
                <IonImg className="h-2 w-2" src={check} alt="check-icon" />
              )}
            </div>
            <p>Silver</p>
          </div>
          <div className="flex flex-col gap-2 w-[10%] items-center">
            <div className="flex items-center justify-center h-5 w-5 bg-white rounded-full z-[100]">
              {level > 2 && (
                <IonImg className="h-2 w-2" src={check} alt="check-icon" />
              )}
            </div>
            <p>Gold</p>
          </div>
          <div className="flex flex-col gap-2 w-[10%] items-center">
            <div className="flex items-center justify-center h-5 w-5 bg-white rounded-full z-[100]">
              {level > 3 && (
                <IonImg className="h-2 w-2" src={check} alt="check-icon" />
              )}
            </div>
            <p>Plantinum</p>
          </div>
          <div className="flex flex-col gap-2 w-[10%] items-center">
            <div className="flex items-center justify-center h-5 w-5 bg-white rounded-full z-[100]">
              {level > 4 && (
                <IonImg className="h-2 w-2" src={check} alt="check-icon" />
              )}
            </div>
            <p>Saphire</p>
          </div>
        </div>
      </div>

      {/* current level */}
      <div className="flex items-center justify-between mt-3 text-[0.813rem] px-[10px]">
        <IonRouterLink routerLink={`/subscription/new-plan`}>
          <p className="text-[#FF5C00] font-bold">New Plan</p>
        </IonRouterLink>
        <div className="flex justify-end items-center gap-2">
          <div className="text-white bg-black p-1 px-2">
            <p className="text-xs">GOLD PLAN</p>
          </div>
          <IonRouterLink routerLink={`/subscription/upgrade-renew`}>
            <p className="text-[#FF5C00] font-bold">Upgrade/Renew</p>
          </IonRouterLink>
        </div>
      </div>

      {/* subscription list */}
      <SubscriptionList />
    </section>
  );
};

export default Subscription;
