import React, { useState } from "react";
import { IonSelect, IonSelectOption, IonImg, IonAlert } from "@ionic/react";
import down from "../../../assets/down.png";
import styles from "./NewSub.module.css";
import check from "../../../assets/check.png";
import SubscriptionModal from "../SubscriptionModal";

const NewSubscriptionForm = () => {
  const [marketId, setmarketId] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [amount, setAmount] = useState("50000");
  const [startDate, setstartDate] = useState("Wednesday, March 2024");
  const [expiryDate, setExpiryDate] = useState("Wednesday, June, 2024");
  const [plan, setplan] = useState<string>("");
  const [method, setMethod] = useState<string>("");
  const [terms, setTerms] = useState(false);
  const [autoDebit, setAutoDebit] = useState(false);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const planList = ["Bronze", "Silver", "Gold", "Plantinum", "Saphire"];
  const methodList = ["E-Wallet", "Other"];
  const message = `You have successfully subscribed to ${plan} Plan, you now have access to more features and benefits`;

  const handleplanSelect = (event: CustomEvent) => {
    setplan(event.detail.value);
  };
  const handleMethodSelect = (event: CustomEvent) => {
    setMethod(event.detail.value);
  };

  const setModalHandler = (modalstate: boolean) => {
    setModal(modalstate);
  };

  const submitFormHandler = () => {
    switch (true) {
      case plan === "":
        setError(true);
        setErrorMessage("Please choose a plan");
        return;

      case method === "":
        setError(true);
        setErrorMessage("Please select a payment method");
        return;

      case !terms:
        setError(true);
        setErrorMessage("Please agree to terms and conditions");
        return;

      default:
        setModal(true);
    }
  };

  return (
    <section className="p-[20px] text-[0.813rem]">
      <form className="flex flex-col gap-4 font-[500]">
        {/* marketers ID */}
        <div className="flex flex-col gap-2">
          <label htmlFor="marketid">{`Marketer's`} ID</label>
          <input
            className="py-2 px-3 bg-[#D9D9D947]"
            type="text"
            id="marketid"
            onChange={(e) => setmarketId(e.target.value)}
            value={marketId}
          />
        </div>

        {/* Current Plan */}
        <div className="flex flex-col gap-2">
          <label htmlFor="company__id">Company ID</label>
          <input
            className="py-2 px-3 bg-[#D9D9D947]"
            type="text"
            id="company__id"
            onChange={(e) => setCompanyId(e.target.value)}
            value={companyId}
          />
        </div>

        {/* marketer id */}
        <div className="flex flex-col gap-2">
          <input
            className="py-2 px-3 bg-[#D9D9D9C2]"
            type="text"
            onChange={(e) => setmarketId(e.target.value)}
            value={marketId}
            placeholder="Marketer ID"
            readOnly
          />
        </div>

        {/* Preferred plan select */}
        <div className="flex flex-col gap-2">
          <p>Preferred Plan</p>
          <div className={styles["select__container"]}>
            <IonSelect
              value={plan}
              placeholder="Choose Plan"
              class="disabled"
              onIonChange={handleplanSelect}
              className={styles.select}
            >
              {planList.map((plan) => (
                <IonSelectOption key={plan} value={plan}>
                  {plan}
                </IonSelectOption>
              ))}
            </IonSelect>

            <IonImg
              className={styles.down}
              src={down}
              alt="chevron down arrow"
            />
          </div>
        </div>

        {/* Sub Amount */}
        <div className="flex flex-col gap-2">
          <label htmlFor="Amount">Subscription Amount</label>
          <input
            className="py-2 px-3 bg-[#D9D9D9C2]"
            type="text"
            id="Amount"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            readOnly
          />
        </div>

        {/* startDate */}
        <div className="flex flex-col gap-2">
          <label htmlFor="startDate">Plan start date</label>
          <input
            className="py-2 px-3 bg-[#D9D9D9C2]"
            type="text"
            id="startDate"
            onChange={(e) => setstartDate(e.target.value)}
            value={startDate}
            readOnly
          />
        </div>

        {/* Plan expiring date */}
        <div className="flex flex-col gap-2">
          <label htmlFor="epirey__date">Plan expiring date</label>
          <input
            className="py-2 px-3 bg-[#D9D9D9C2]"
            type="text"
            id="epirey__date"
            onChange={(e) => setExpiryDate(e.target.value)}
            value={expiryDate}
            readOnly
          />
        </div>

        {/* Preferred payment method */}
        <div className="flex flex-col gap-2">
          <p>Preferred payment method</p>
          <div className={styles["select__container"]}>
            <IonSelect
              value={method}
              placeholder="Choose Method"
              class="disabled"
              onIonChange={handleMethodSelect}
              className={styles.select}
            >
              {methodList.map((method) => (
                <IonSelectOption key={method} value={method}>
                  {method}
                </IonSelectOption>
              ))}
            </IonSelect>

            <IonImg
              className={styles.down}
              src={down}
              alt="chevron down arrow"
            />
          </div>
        </div>

        {/* agreements */}
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <div
              onClick={() => setTerms(!terms)}
              className="flex items-center justify-center w-6 h-4 border border-gray-600"
            >
              {terms && (
                <IonImg className="w-3 h-2" src={check} alt="check-icon" />
              )}
            </div>
            <p>I agree to the terms and conditions</p>
          </div>
          <div className="flex gap-2 items-center">
            <div
              onClick={() => setAutoDebit(!autoDebit)}
              className="flex items-center justify-center w-6 h-4 border border-gray-600"
            >
              {autoDebit && (
                <IonImg className="w-3 h-2" src={check} alt="check-icon" />
              )}
            </div>
            <p>Auto-debit my card for renewal</p>
          </div>
        </div>

        {/* action button */}
        <button
          type="button"
          onClick={submitFormHandler}
          className="bg-[#FF6B00] self-end text-white px-3 py-1 rounded-[5px]"
        >
          Continue
        </button>
      </form>

      <SubscriptionModal
        onSetModal={setModalHandler}
        modalState={modal}
        title="Upgrade successfully"
        message={message}
        button="Back To Home"
        route="subscription"
      />

      {/* error alert */}
      <IonAlert
        isOpen={error}
        onDidDismiss={() => setError(false)}
        header={"Error"}
        message={errorMessage}
        buttons={["OK"]}
      />
    </section>
  );
};

export default NewSubscriptionForm;
