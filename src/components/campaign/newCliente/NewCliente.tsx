import { IonContent, IonHeader, IonLoading, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import SuccessModal from '../../clients/modal/SuccessModal';
import styles from "./NewCliente.module.css";

const NewCliente: React.FC = () => {

    const [modal, setModal] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [error, setError] = useState<boolean | string>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const addNewClient = async () => {
        const formIsValid =
        firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        phoneNumber.length > 8 &&
        email.trim() !== "" &&
        dob.trim() !== "";

        if (!formIsValid) {
        setError("Please make sure all forms are filled correctly");
        return;
        }

        try {
        setError(false);
        setLoading(true);
        const response = await fetch("https://app.pipeline.ng/api/client/add", {
            method: "POST",
            body: JSON.stringify({
            coyId: 10,
            clientName: `${firstName} ${lastName}`,
            mobileNo: `${phoneNumber}`,
            email: `${email}`,
            dob: `${dob}`,
            }),
            headers: {
            "Content-Type": "application/json",
            },
        });

        const data = await response.json();
        setModal(true);
        } catch (err: any) {
        setError(`${err.message}`);
        } finally {
        setLoading(false);
        }
    };

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

                {/* loading state */}
                <IonLoading isOpen={loading} message={"Adding New Client..."} />

                {/* first name */}
                <input
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                type="text"
                />

                {/* last name */}
                <input
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                type="text"
                />

                {/* Phone Number */}
                <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                type="text"
                />

                {/* Email Address */}
                <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                type="text"
                />

                {/* date of birth */}
                <input
                onChange={(e) => setDob(e.target.value)}
                placeholder="DD/MM/YY"
                type="text"
                />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button onClick={addNewClient}>Submit</button>
            <SuccessModal
                onSetModal={setModalHandler}
                modalState={modal}
                title={title}
                message={message}
            />
        </section>
    );
};

export default NewCliente;