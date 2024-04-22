import React from "react";
import { IonModal, IonImg, IonRouterLink } from "@ionic/react";
import party from "../../assets/party.png";
import styles from "./SubscriptionModal.module.css";

type ModalProps = {
  onSetModal: (modalState: boolean) => void;
  modalState: boolean;
  title?: string;
  message?: string;
  button?: string;
  route?: string;
};

const SubscriptionModal = (props: ModalProps) => {
  return (
    <IonModal onClick={() => props.onSetModal(false)} isOpen={props.modalState}>
      <div className={styles.modal}>
        <IonImg className={styles["modal__img"]} src={party} alt="party icon" />
        <strong>{props.title}</strong>
        <p>{props.message}</p>
        {props.button && props.route && (
          <IonRouterLink
            className={styles.button}
            routerLink={`/${props.route}`}
          >
            {props.button}
          </IonRouterLink>
        )}
      </div>
    </IonModal>
  );
};

export default SubscriptionModal;
