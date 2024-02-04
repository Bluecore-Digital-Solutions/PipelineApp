import React, { useState, useEffect } from "react";
import juliet from "../../../assets/ebere.png";
import {
  IonImg,
  IonSearchbar,
  IonItem,
  IonList,
  IonLabel,
  IonRouterLink,
  IonLoading,
} from "@ionic/react";
import styles from "./Clientlist.module.css";
import next from "../../../assets/next-icon.png";
// import _debounce from 'lodash/debounce';

export type ClientProps = {
  clientName: string;
  email: string;
  uniqueId: string;
  mobileNo: string;
  dob: string;
  dateCreated: string;
};

const ClientList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const [clientList, setClientList] = useState<ClientProps[] | null>(null);
  const [filteredClientList, setFilteredClientList] = useState<
    ClientProps[] | null
  >(null);

  const getAllClients = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://app.pipeline.ng/api/client/all/${10}`
      );

      const data = await response.json();

      setClientList(data.data);
      setFilteredClientList(data.data);
    } catch (err) {
      setError(true);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllClients();
  }, []);

  const handleSearchbarChange = (event: CustomEvent) => {
    const searchValue = event.detail.value;

    if (!clientList) {
      return;
    }
    const newList = clientList?.filter((client) =>
      client.clientName.toLowerCase().includes(searchValue)
    );
    setFilteredClientList(newList);
  };

  return (
    <section className="containe">
      {/* search bar */}
      <div className={styles["search-comp"]}>
        <IonSearchbar
          // onIonChange={handleSearchbarChange}
          onIonInput={handleSearchbarChange}
          showClearButton="always"
          class="ion-no-border"
          placeholder="Search Clients"
        ></IonSearchbar>
      </div>

      {/* loading state */}
      <IonLoading isOpen={loading} message={"Getting client list..."} />

      {/* Error message */}
      {error && (
        <p className="text-center text-[12px] text-red-500 font-bold">
          An error occured while fetching client List
        </p>
      )}

      {filteredClientList?.length === 0 && (
        <p className="text-center text-[12px] text-red-500 font-bold">
          No Client Found
        </p>
      )}

      {/* clients list */}
      {!loading && filteredClientList && (
        <IonList lines="none">
          {filteredClientList.map((client) => (
            <IonRouterLink
              key={client.uniqueId}
              className={styles["link__container"]}
              routerLink={`/details/${client.uniqueId}`}
            >
              <IonItem className={styles["client__item"]} key={client.uniqueId}>
                <div className={styles["client__item-l"]}>
                  <IonImg
                    className={styles["client__img"]}
                    src={juliet}
                    alt={client.clientName}
                  />
                  <div className={styles["client__item-r"]}>
                    <p>{client.clientName}</p>
                    <small>{client.email}</small>
                  </div>
                </div>
                <IonImg className={styles["next__icon"]} src={next} />
              </IonItem>
            </IonRouterLink>
          ))}
        </IonList>
      )}
    </section>
  );
};

export default ClientList;
