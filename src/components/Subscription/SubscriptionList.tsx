import React, { useState, useEffect } from "react";
import {
  IonLoading,
  useIonViewWillEnter,
  IonAlert,
  IonList,
  IonItem,
} from "@ionic/react";

type SubData = {
  coyId: number;
  dateCreated: Date;
  expiryDate: Date;
  id: number;
  marketerId: number;
  startDate: Date;
  subAmount: string;
  tranxId: string;
  uniqueId: string;
};

const SubscriptionList = () => {
  const [loading, setLoading] = useState(false);
  const [subList, setSubList] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useIonViewWillEnter(() => {
    getSubscription();
  });

  const getSubscription = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://app.pipeline.ng/api/Subscription/all`,
        {
          method: "POST",
          body: JSON.stringify({
            coyId: "10",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      setSubList(data.data.reverse());

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    } catch (err: any) {
      console.log(err);
      setError(true);
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  return (
    <>
      <IonLoading isOpen={loading} message={"Getting your subscription..."} />
      <IonAlert
        isOpen={error}
        onDidDismiss={() => setError(false)}
        header={"Error"}
        message={errorMessage}
        buttons={["OK"]}
      />
      <IonList className="flex flex-col gap-5 px-[10px] mt-3" lines="none">
        {/* <ul > */}
        {subList.map((item: SubData) => {
          const dateObject = new Date(item.startDate);
          const readableDate = dateObject.toLocaleString("en-US", options);

          return (
            <IonItem key={item.uniqueId}>
              <div className="flex flex-col text-sm font-[500] w-full">
                <p className="text-xs">{readableDate}</p>
                <p>Subscription for Bronze Membership</p>
                <div className="flex justify-between items-center">
                  {/* price */}
                  <p>N{item.subAmount}</p>

                  {/* status */}
                  <p className="text-[#FF0000C9] text-xs">Approved</p>
                </div>
              </div>
            </IonItem>
          );
        })}
      </IonList>
    </>
  );
};

export default SubscriptionList;
