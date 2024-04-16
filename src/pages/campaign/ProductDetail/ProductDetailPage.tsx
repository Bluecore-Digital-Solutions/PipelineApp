import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonRouterLink,
} from "@ionic/react";
import image from "../../../assets/back.png";
import heart from "../../../assets/heart.png";
import styles from "./ProductDetail.module.css";
import { useHistory } from "react-router";
import ProductDetail from "../../../components/Campaigns/ProductDetails/ProductDetail";

const ProductDetailPage: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <div className={styles.header}>
            {/* subscription header */}
            <IonRouterLink
              onClick={() => history.goBack()}
              className={styles.link}
            >
              <IonImg className={styles["back__icon"]} src={image} />
            </IonRouterLink>
            <IonTitle className={styles.title}>Products</IonTitle>
            <IonImg className="h-3 w-[0.886rem]" src={heart} />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ProductDetail />
      </IonContent>
    </IonPage>
  );
};

export default ProductDetailPage;
