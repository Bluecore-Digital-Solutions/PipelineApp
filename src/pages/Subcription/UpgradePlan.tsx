import {
  IonBackButton,
  IonButton,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./UpgradePlan.css";
import { useParams, useHistory } from "react-router";

const UpgradePlan: React.FC = () => {
  const { id } = useParams<any>();
  const [form, setForm] = useState({});
  const [sub, setSub] = useState([]);
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  // const { handleSubmit, register } = useForm({
  //   defaultValues: {
  //     market: "",
  //     currentplan: "",
  //     newplan: "",
  //     duration: "",
  //     amount: "",
  //     plan: "",
  //     planex: "",
  //     method: "",
  //     agree: "",
  //     auto: "",
  //   },
  // });
  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://app.pipeline.ng/api/Subscription/Update/${id}`,
        {
          method: "PUT",
          headers: { "Content Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      if (response.ok) {
        const json = await response.json();
        setSub(json);
        setSuccess(true);
        console.log("Success"), history.push("/success");
      }
    } catch (error) {
      console.log(error, "fail");
      setErr("Something went wrong");
      setSuccess(false);
      history.push("/success");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton className="button-1" slot="start">
            <IonBackButton
              className="back"
              defaultHref="/subcription"
            ></IonBackButton>
          </IonButton>
          <IonTitle>Upgrade/Plan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonList style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <form onSubmit={onSubmit}>
            <label htmlFor="market" className="item-label">
              Marketers Name
            </label>
            <IonInput
              id="market"
              class="custom-input"
              type="text"
              name="market"
              onChange={handleChange}
            ></IonInput>

            <label htmlFor="current" className="item-label">
              Current Plan
            </label>
            <IonInput
              id="current"
              class="custom-input"
              type="text"
              name="currentplan"
              onChange={handleChange}

              // ref={register}
            />

            <label htmlFor="new" className="item-label">
              New plan
            </label>
            <IonSelect
              id="new"
              name="newplan"
              aria-label="plans"
              labelPlacement="floating"
              class="custom-drop"
              interface="popover"
              onChange={handleChange}

              // ref={register}
            >
              <IonSelectOption value={"Platinium"}> Platinum</IonSelectOption>
              <IonSelectOption value={"Gold"}>Gold</IonSelectOption>
              <IonSelectOption value={"Silver"}>Silver</IonSelectOption>
              <IonSelectOption value={"Sappire"}>Sapphire</IonSelectOption>
            </IonSelect>

            <label htmlFor="duration" className="item-label">
              Duration
            </label>
            <IonInput
              id="duration"
              class=" custom-input"
              type="text"
              name="durtion"
              onChange={handleChange}

              // ref={register}
            />

            <label htmlFor="amount" className="item-label">
              Amount
            </label>
            <IonInput
              class="custom-input"
              type="text"
              name="amount"
              id="amount"
              onChange={handleChange}

              // ref={register}
            />

            <label htmlFor="planex" className="item-label">
              Plan expiring date
            </label>
            <IonInput
              class="custom-input"
              type="text"
              name="plan"
              id="planex"
              onChange={handleChange}

              // ref={register}
            />

            <label htmlFor="method" className="item-label">
              Preferred payment method
            </label>
            <IonSelect
              aria-label="method"
              id="method"
              name="method"
              labelPlacement="floating"
              interface="popover"
              class="custom-drop"
              onChange={handleChange}

              // ref={register}
            >
              <IonSelectOption value={"E-wallet"}> E-wallet</IonSelectOption>
              <IonSelectOption value={"Gold"}>Gold</IonSelectOption>
              <IonSelectOption value={"Silver"}>Silver</IonSelectOption>
              <IonSelectOption value={"Sappire"}>Sapphire</IonSelectOption>
            </IonSelect>

            <IonItem className="item">
              <IonCheckbox name="agree" onChange={handleChange} />
              <IonLabel className="item-label" style={{ marginLeft: "8px" }}>
                I agree to the terms and conditions
              </IonLabel>
            </IonItem>
            <IonItem className="item">
              <IonCheckbox name="auto" onChange={handleChange} />
              <IonLabel className="item-label" style={{ marginLeft: "8px" }}>
                Auto-debit my card for renewal
              </IonLabel>
            </IonItem>

            <div className="c-button">
              <IonButton type="submit">Continue</IonButton>
            </div>
          </form>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default UpgradePlan;
