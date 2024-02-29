import React, { useState } from "react";
import styles from "./AttatchClient.module.css";
import SuccessModal from "../modal/SuccessModal";
import {
  IonSelect,
  IonSelectOption,
  IonImg,
  IonRouterLink,
} from "@ionic/react";
import down from "../../../assets/down.png";
import { clientList, productList } from "./clients";

const AttctchClient = () => {
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState<string>("");
  const [client, setClient] = useState<string>("");

  const handleProductSelect = (event: CustomEvent) => {
    setProduct(event.detail.value);
  };

  const handleClientSelect = (event: CustomEvent) => {
    setClient(event.detail.value);
  };

  const setModalHandler = (modalstate: boolean) => {
    setModal(modalstate);
  };

  const title = "Client attachment successful";
  const message = `You have successfully attached ${client} to Mongo Park Estate, you can now manage this client easily.`;

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
            value={client}
            placeholder="Clients"
            class="disabled"
            onIonChange={handleClientSelect}
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

        <IonRouterLink routerLink="/new-clients" className={styles.add}>
          Add New Client
        </IonRouterLink>
      </div>

      <button onClick={() => setModal(true)}>Confirm</button>
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

export default AttctchClient;
