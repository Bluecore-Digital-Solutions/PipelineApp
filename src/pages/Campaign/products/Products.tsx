import { IonContent, IonHeader, IonImg, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router';
import styles from './Products.module.css';
import back from "../../../assets/back.png";
import { campaignData } from '../../../components/data';
import Product from '../../../components/campaign/product/Product';

const Products: React.FC = () => {
    const navigate = useHistory()

    return (
        <IonPage>
            <IonHeader class="ion-no-border">
                <IonToolbar>
                <div className={styles.header}>
                    <IonRouterLink
                    onClick={() => navigate.goBack()}
                    className=".link"
                    >
                        <IonImg className={styles["back__icon"]} src={back} />
                    </IonRouterLink>
                    <IonTitle className={styles.title}>Products</IonTitle>
                    <span>
                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.54345 0C2.569 0 1.70085 0.404692 1.04532 1.03812C0.407496 1.67155 0 2.53372 0 3.51906C0 4.4868 0.407496 5.34897 1.04532 6L7.08689 12L13.1285 6C13.7663 5.36657 14.1738 4.5044 14.1738 3.51906C14.1738 2.55132 13.7663 1.68915 13.1285 1.03812C12.4906 0.404692 11.6225 0 10.6303 0C9.65589 0 8.78775 0.404692 8.13221 1.03812C7.49439 1.67155 7.08689 2.53372 7.08689 3.51906C7.08689 2.55132 6.6794 1.68915 6.04157 1.03812C5.40375 0.404692 4.53561 0 3.54345 0Z" fill="#FF5C00"/>
                        </svg>
                    </span>
                </div>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <Product />
            </IonContent>
        </IonPage>
    );
};

export default Products;