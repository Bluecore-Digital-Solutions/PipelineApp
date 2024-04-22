import React, { useState } from "react";
import styles from "./AddNewCampaign.module.css";
import SuccessModal from "../../clients/modal/SuccessModal";
import {
  IonSelect,
  IonSelectOption,
  IonImg,
  IonAlert,
  IonLoading,
} from "@ionic/react";
import down from "../../../assets/down.png";
import { clientList, productList, positionList } from "./campaign";

const AddNewCampaign = () => {
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [content, setContent] = useState("");
  const [daysAfter, setDaysAfter] = useState<number>();
  const [campaignType, setCampaignType] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const title = "Campaign Added successful";
  const message = `You have successfully add a new campaign to your account, you can now manage this campaign easily from your dashboard.`;

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

  const submitFormHandler = () => {
    switch (true) {
      case product === "":
        setError(true);
        setErrorMessage("Please choose a product to add");
        return;

      case campaignType === "":
        setError(true);
        setErrorMessage("Please select a campaign type");
        return;

      case content === "":
        setError(true);
        setErrorMessage("Please enter a reasonable content");
        return;

      case position === "" || !daysAfter:
        setError(true);
        setErrorMessage(
          "Please select a position and enter a digit in days after"
        );
        return;

      default:
        addNewCampaign();
    }
  };

  const addNewCampaign = async () => {
    try {
      setLoading(true);

      const response = await fetch(`https://app.pipeline.ng/api/Campaign/Add`, {
        method: "POST",
        body: JSON.stringify({
          coyId: 10,
          productId: 40,
          campaignType: campaignType,
          content: content,
          position: position,
          daysAfter: `${daysAfter}`,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data);
        throw new Error(data.title);
      }

      console.log(data);
      setModal(true);
    } catch (err: any) {
      setError(true);
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.container}>
      {/* loading state indicator */}
      <IonLoading isOpen={loading} message={"Adding new campaign..."} />

      {/* error alert */}
      <IonAlert
        isOpen={error}
        onDidDismiss={() => setError(false)}
        header={"Error"}
        message={errorMessage}
        buttons={["OK"]}
      />

      <div className={styles.form}>
        <p>
          Kindly select the clients you wish to attach to a specific products
        </p>

        {/* product select */}
        <div className={styles["select__container"]}>
          <IonSelect
            value={product}
            placeholder="Product"
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
              placeholder="Position"
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
            onChange={(e) => setDaysAfter(+e.target.value)}
            defaultValue={daysAfter}
            className="h-[44px] text-[0.625rem] rounded-md px-[5px] bg-white"
            type="number"
            placeholder="Days after"
          />
        </div>
      </div>

      <button className="py-2" onClick={submitFormHandler}>
        Confirm
      </button>
      <SuccessModal
        onSetModal={setModalHandler}
        modalState={modal}
        title={title}
        message={message}
        button="Back To Home"
        route="campaigns"
      />
    </section>
  );
};

export default AddNewCampaign;
