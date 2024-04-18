import React, { useState } from "react";
import styles from "./AddNewCampaign.module.css";
import SuccessModal from "../../clients/modal/SuccessModal";
import {
  IonSelect,
  IonSelectOption,
  IonImg,
  IonRouterLink,
} from "@ionic/react";
import down from "../../../assets/down.png";
import { clientList, productList, positionList } from "./campaign";

const AddNewCampaign = () => {
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [content, setContent] = useState("");
  const [daysAfter, setDaysAfter] = useState("");
  const [campaignType, setCampaignType] = useState<string>("");

  const handleProductSelect = (event: CustomEvent) => {
    setProduct(event.detail.value);
  };

  const handleCampaignSelect = (event: CustomEvent) => {
    setCampaignType(event.detail.value);
  };
  const handlePositionSelect = (event: CustomEvent) => {
    setPosition(event.detail.value);
  };

  const setModalHandler = (modalstate: boolean) => {
    setModal(modalstate);
  };

  const title = "Campaign Added successful";
  const message = `You have successfully add a new campaign to your account, you can now manage this campaign easily from your dashboard.`;

  return (
    <section className={styles.container}>
      <div className={styles.form}>
        <p>
          Kindly select the clients you wish to attach to a specific products
        </p>

        {/* product select */}
        <div className={styles["select__container"]}>
          <IonSelect
            value={product}
            placeholder="Products"
            class="disabled"
            onIonChange={handleProductSelect}
            className={styles.select}
          >
            {productList.map((client) => (
              <IonSelectOption key={client} value={client}>
                {client}
              </IonSelectOption>
            ))}
          </IonSelect>

          <IonImg className={styles.down} src={down} alt="chevron down arrow" />
        </div>

        {/* client select */}
        <div className={styles["select__container"]}>
          <IonSelect
            value={campaignType}
            placeholder="Campaign Type"
            class="disabled"
            onIonChange={handleCampaignSelect}
            className={styles.select}
          >
            {clientList.map((client) => (
              <IonSelectOption key={client} value={client}>
                {client}
              </IonSelectOption>
            ))}
          </IonSelect>

          <IonImg className={styles.down} src={down} alt="chevron down arrow" />
        </div>

        {/* text area */}
        <div className="text-[0.625rem]">
          <textarea
            className="w-full p-2"
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            cols={5}
            rows={7}
          ></textarea>
        </div>

        {/* possition and days after */}
        <div className="flex justify-between items-center text-[0.625rem]">
          {/* possition */}
          <div className={`${styles["select__container"]}, w-[40%]`}>
            <IonSelect
              value={position}
              placeholder="Ppssition"
              class="disabled"
              onIonChange={handlePositionSelect}
              className={`${styles.select} h-[30px]`}
            >
              {positionList.map((position) => (
                <IonSelectOption key={position} value={position}>
                  {position}
                </IonSelectOption>
              ))}
            </IonSelect>
            {/* right: 5px; top: 50%; transform: ; */}
            <IonImg
              className="w-[10px] h-[8px] absolute top-[60%] -translate-y-[50%] z-[100] right-[60%]"
              src={down}
              alt="chevron down arrow"
            />
          </div>

          {/* days after */}
          {/* border: none; */}
          <input
            onChange={(e) => setDaysAfter(e.target.value)}
            value={daysAfter}
            className="h-[44px] text-[0.625rem] rounded-md px-[5px] bg-white"
            type="text"
            placeholder="Days after"
          />
        </div>
      </div>

      <button className="py-2" onClick={() => setModal(true)}>
        Confirm
      </button>
      <SuccessModal
        onSetModal={setModalHandler}
        modalState={modal}
        title={title}
        message={message}
        button="Back To Home"
        route="client"
      />
    </section>
  );
};

export default AddNewCampaign;
