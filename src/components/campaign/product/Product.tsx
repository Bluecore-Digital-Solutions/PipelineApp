import { IonContent, IonHeader, IonImg, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import styles from './Product.module.css';
import { useHistory, useParams } from 'react-router';
import { campaignData } from '../../data';
import { clientData } from '../../data';

const Product: React.FC = () => {
    const { id } = useParams< {id:string} >();

    const navigate = useHistory();

    

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <div className={styles.container}>
                    <div className={styles["product__imgDiv"]} style={{backgroundImage:`url(${campaignData[1].imageUrl})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition:"center"}}>
                        <div className={styles["div__trans"]}>

                        </div>
                    </div>

                    <div className={styles["product__content"]}>
                        <h1>{campaignData[1].title}</h1>
                        <p>
                            <span className={styles.locate}>
                                <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 0C2.45667 0 0 2.345 0 5.25C0 8.75 5.5 14 5.5 14C5.5 14 11 8.75 11 5.25C11 2.345 8.54333 0 5.5 0ZM5.5 1.75C7.535 1.75 9.16667 3.325 9.16667 5.25C9.16667 7.1925 7.535 8.75 5.5 8.75C3.48333 8.75 1.83333 7.1925 1.83333 5.25C1.83333 3.325 3.48333 1.75 5.5 1.75Z" fill="#FF6B00"/>
                                </svg>
                            </span>

                            <span>
                                {campaignData[1].location}<span className={styles["product__title"]}>&#40;Governor&apos;s Consent&#41;	</span>
                            </span>
                        </p>
                    </div>

                    <div className={styles.campaignD}>
                        <div className={styles["canpaign__bar"]}>
                            <h3>Campaigns</h3>
                            <span>
                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.875 0L0 1.90909L5 7L10 1.90909L8.125 0L5 3.18182L1.875 0Z" fill="black" fillOpacity="0.72"/>
                                </svg>
                            </span>
                        </div>

                        <ul>
                            <li>Filler text is text that shares some characteristics of a real written text, 
                                but is random or otherwise generated</li>
                            <li>Filler text is text that shares some characteristics of a real written text, 
                                but is random or otherwise generated
                            </li>
                            <li>Filler text is text that shares some characteristics of a real written text, 
                                but is random or otherwise generated
                            </li>
                            
                        </ul>
                    </div>

                    <div className={styles.clientD}>
                        <div className={styles["canpaign__bar"]}>
                            <h3>Clients</h3>
                            <span>
                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.875 0L0 1.90909L5 7L10 1.90909L8.125 0L5 3.18182L1.875 0Z" fill="black" fillOpacity="0.72"/>
                                </svg>
                            </span>
                        </div>

                        {
                            clientData.map(client => {
                                return(
                                    <div key={client.id} className={styles.clientDt}>
                                        <div className={styles.imgDiv}>
                                            <img src={client.imageUrl} alt={client.name} className={styles.cliImg} />
                                        </div>
                                        <div className={styles.cliDetails}>
                                            <h3>{client.name}</h3>
                                            <p>{client.email}</p>
                                            <p>{client.phone}</p>
                                            <a href="#">View/Edit</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <IonRouterLink className={styles.addCliBtn} routerLink="/attachclient">Add Client<span className={styles.btnIcon}><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.0428 0.25C2.95457 0.25 2.0642 1.335 2.0642 2.67188C2.0642 4.00875 2.95457 5.09375 4.0428 5.09375C5.13103 5.09375 6.0214 4.00875 6.0214 2.67188C6.0214 1.335 5.13103 0.25 4.0428 0.25ZM1.97516 5.09375C0.926507 5.14219 0.0856018 5.985 0.0856018 7.03125V8H8V7.03125C8 5.985 7.16899 5.14219 6.11044 5.09375C5.57622 5.68469 4.84413 6.0625 4.0428 6.0625C3.24147 6.0625 2.50939 5.68469 1.97516 5.09375Z" fill="white"/>
                        </svg>
                        </span>
                    </IonRouterLink>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Product;