import React, { useState } from "react";
import styles from "./AddNewCampaign.module.css";
import SuccessModal from "../../../components/clients/modal/SuccessModal";
import {
    IonImg,
//   IonSelect,
//   IonSelectOption,
//   IonImg,
  IonRouterLink,
  IonSelect,
  IonSelectOption,
  IonTextarea,
} from "@ionic/react";
import down from "../../../assets/down.png";
// import { clientList, productList } from "../../../components/clients/";

const AddNewCampaign: React.FC = () => {


    const productList = [
        "Landmark",
        "Treasture Palace",
        "JJT",
        "Art Gallery",
    ];
        
    const clientList = [
        "Fortune", "Tomboy", "Prince", "Gozie"
    ];

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

  const title = "Campaign Added successfully";
  const message = `You have successfully attached a new campaign to your account, you can now manage this campaign easily from your dashboard.`;


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
                        {productList.map((item1) => (
                        <IonSelectOption key={client} value={item1}>
                            {item1}
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

                <div>
                    <textarea rows={4} cols={31} placeholder='Content'></textarea>
                </div>

                <div className={styles["select__container"]}>
                    <div className={styles.contain}>
                        <div className="select__part">
                            <IonSelect
                                value={client}
                                class="disabled"
                                className={styles.set}
                                placeholder="Position"
                            >
                                {clientList.map((client) => (
                                    <IonSelectOption key={client} value={client}>
                                        {client}
                                    </IonSelectOption>
                                ))}
                            </IonSelect>

                            <IonImg className={styles["down_n"]} src={down} alt="chevron down arrow" />
                        </div>

                        <div className="input__part">
                            <IonSelect 
                                class="disabled"
                                className={styles.daysA} 
                                placeholder="Days After"
                            ></IonSelect>
                        </div>
                    </div>
                </div>

                {/* <IonRouterLink routerLink="/new-clients" className={styles.add}>
                Add New Client
                </IonRouterLink> */}

                <button onClick={() => setModal(true)}>Confirm</button>
                <SuccessModal
                    onSetModal={setModalHandler}
                    modalState={modal}
                    title={title}
                    message={message}
                    button="Back To Home"
                    route="campaigns"
                />
            </div>

            
        </section>
    );
};

export default AddNewCampaign;