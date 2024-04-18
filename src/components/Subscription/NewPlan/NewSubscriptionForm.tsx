import React, { useEffect, useState } from "react";
import {
  IonSelect,
  IonSelectOption,
  IonImg,
  IonAlert,
  IonLoading,
} from "@ionic/react";
import down from "../../../assets/down.png";
import styles from "./NewSub.module.css";
import check from "../../../assets/check.png";
import SubscriptionModal from "../SubscriptionModal";

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  weekday: "long",
};

const NewSubscriptionForm = () => {
  const [marketId, setmarketId] = useState<number>();
  const [companyId, setCompanyId] = useState<number>();
  const [amount, setAmount] = useState("50000");
  const [startDate, setstartDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [readableExpiryDate, setReadableExpiryDate] = useState("");
  const [readableStartDate, setReadableStartDate] = useState("");
  const [plan, setplan] = useState<string>("");
  const [method, setMethod] = useState<string>("");
  const [terms, setTerms] = useState(false);
  const [autoDebit, setAutoDebit] = useState(false);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    const planNumber =
      plan === "Bronze"
        ? 1
        : plan === "Silver"
        ? 2
        : plan === "Gold"
        ? 3
        : plan === "Plantinum"
        ? 4
        : plan === "Saphire"
        ? 5
        : 0;
    futureDate.setMonth(currentDate.getMonth() + planNumber);

    setstartDate(currentDate.toISOString());
    setExpiryDate(futureDate.toISOString());

    const readableDate = (date: Date) => {
      const weekday = date.toLocaleDateString("en-NG", {
        weekday: "long",
      });
      const month = date.toLocaleDateString("en-NG", { month: "long" });
      const year = date.toLocaleDateString("en-NG", { year: "numeric" });

      return `${weekday}, ${month}, ${year}`;
    };

    setReadableStartDate(readableDate(currentDate));
    setReadableExpiryDate(readableDate(futureDate));
  }, [plan]);

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
        addNewSubscription();
    }
  };

  const addNewSubscription = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://app.pipeline.ng/api/Subscription/Add`,
        {
          method: "POST",
          body: JSON.stringify({
            coyId: companyId,
            tranxId: "string",
            marketerId: marketId,
            subAmount: amount,
            startDate: startDate,
            expiryDate: expiryDate,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.log(data);
        throw new Error("Something wernt wrong");
      }

      setModal(true);
      console.log(data);
    } catch (err: any) {
      console.log(err);
      setError(true);
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-[20px] text-[0.813rem]">
      <IonLoading isOpen={loading} message={"Adding New Subscription..."} />
      <form className="flex flex-col gap-4 font-[500]">
        {/* marketers ID */}
        <div className="flex flex-col gap-2">
          <label htmlFor="marketid">{`Marketer's`} ID</label>
          <input
            className="py-2 px-3 bg-[#D9D9D947]"
            type="number"
            id="marketid"
            onChange={(e) => setmarketId(Number(e.target.value))}
            defaultValue={marketId}
          />
        </div>

        {/* Current Plan */}
        <div className="flex flex-col gap-2">
          <label htmlFor="company__id">Company ID</label>
          <input
            className="py-2 px-3 bg-[#D9D9D947]"
            type="number"
            id="company__id"
            onChange={(e) => setCompanyId(Number(e.target.value))}
            defaultValue={companyId}
          />
        </div>

        {/* marketer id */}
        <div className="flex flex-col gap-2">
          <input
            className="py-2 px-3 bg-[#D9D9D9C2]"
            type="number"
            onChange={(e) => setmarketId(Number(e.target.value))}
            defaultValue={marketId}
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
            // onChange={(e) => setstartDate(e.target.value)}
            value={readableStartDate}
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
            value={readableExpiryDate}
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
