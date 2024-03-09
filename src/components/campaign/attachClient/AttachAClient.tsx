import { IonContent, IonHeader, IonImg, IonPage, IonRouterLink, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import SuccessModal from '../../clients/modal/SuccessModal';
import styles from "./AttachAClient.module.css";
import down from "../../../assets/down.png";


const AttachAClient: React.FC = () => {

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
  const message = `You have successfully attached ${client} to ${product}, you can now manage this client easily.`;

    const productList = [
        "Gracias",
        "Highbridge Homes",
        "MKH",
        "Folydam Homes",
    ];
     const clientList = [
        "Chinenye", "Taiwo", "Yinka", "Arinze"
    ];

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

                <IonRouterLink routerLink="/addnewclient" className={styles.add}>
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
                route="campaigns"
            />
        </section>
    );
};

export default AttachAClient;