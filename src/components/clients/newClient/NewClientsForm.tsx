import React, { useState } from "react";
import styles from "./NewClients.module.css";
import SuccessModal from "../modal/SuccessModal";

const NewClientsForm = () => {
  const [modal, setModal] = useState(false);

  const setModalHandler = (modalstate: boolean) => {
    setModal(modalstate);
  };

  const title = "New Client Added successfully";
  const message = `You have successfully register Emeka John under as your client, you
  can now manage this client easily from your dashboard.`;

  return (
    <section className={styles.container}>
      <div className={styles.form}>
        <p>Kindly fill the below form to register your client information</p>

        {/* first name */}
        <input placeholder="First Name" type="text" />

        {/* last name */}
        <input placeholder="Last Name" type="text" />

        {/* Phone Number */}
        <input placeholder="Phone Number" type="text" />

        {/* Email Address */}
        <input placeholder="Email Address" type="text" />

        {/* date of birth */}
        <input placeholder="DD/MM/YY" type="text" />
      </div>

      <button onClick={() => setModal(true)}>Submit</button>
      <SuccessModal
        onSetModal={setModalHandler}
        modalState={modal}
        title={title}
        message={message}
      />
    </section>
  );
};

export default NewClientsForm;
