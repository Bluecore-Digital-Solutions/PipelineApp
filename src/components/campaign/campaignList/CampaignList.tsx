import { IonContent, IonHeader, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import styles from "./CampaignList.module.css";
import firstHouse from "../../../assets/house1.jpg";
import { campaignData } from '../../data';
import { useParams } from 'react-router';

const CampaignList: React.FC = () => {
    const myColor = `rgba(0, 0, 0, .6)`;

    

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <div className={styles.container}>

                        {
                            campaignData.map(item => {
                                return(
                                    <div key={item.id} className={styles["inner__card"]} >
                                        <div className={styles.card} style={{backgroundImage: `url(${item.imageUrl})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                            <div className={styles.topFont}>
                                                <div className={styles["card__main"]}>
                                                    <h1>{item.title}</h1>
                                                    <p>
                                                        <span className={styles.item1}>
                                                            <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5.5 0C2.45667 0 0 2.5125 0 5.625C0 9.375 5.5 15 5.5 15C5.5 15 11 9.375 11 5.625C11 2.5125 8.54333 0 5.5 0ZM5.5 1.875C7.535 1.875 9.16667 3.5625 9.16667 5.625C9.16667 7.70625 7.535 9.375 5.5 9.375C3.48333 9.375 1.83333 7.70625 1.83333 5.625C1.83333 3.5625 3.48333 1.875 5.5 1.875Z" fill="#FF6B00"/>
                                                            </svg>
                                                        </span>
                                                        <span >
                                                            {item.location}
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className={styles["card__body"]}>
                                                    <span>Clients:{item.clients}</span><span>Campaign: {item.campaigns}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <IonRouterLink routerLink={`/products/${item.id}`}>
                                            <div className={styles["lower__card"]}>
                                                <span>
                                                    <svg width="18" height="7" viewBox="0 0 18 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.25 0V2.8H0V4.2H11.25V7L18 3.458L11.25 0Z" fill="#FF5C00"/>
                                                    </svg>
                                                </span>
                                                <span> View Products</span>
                                            </div>
                                        </IonRouterLink>
                                    </div>
                                )
                            })
                        }
                </div>
            </IonContent>
        </IonPage>
    );
};

export default CampaignList;

function rgba(arg0: number, arg1: number, arg2: number, arg3: number): import("csstype").Property.BackgroundColor | undefined {
    throw new Error('Function not implemented.');
}
