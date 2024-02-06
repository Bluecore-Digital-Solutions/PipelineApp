import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { airplaneOutline, bulbOutline, cameraOutline, heartOutline, locationOutline, menuOutline, playOutline } from 'ionicons/icons';
import React from 'react';

const ClientProfile: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent style={{display:"flex",alignItems:"center"}}>
                <section className='profile__div__1'>
                    <IonAvatar aria-hidden="true" slot="start">
                        <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        
                    </IonAvatar>
                    <IonTitle style={{color:"#fff", fontWeight:"bold"}}>Ebele Juliet</IonTitle>
                </section>
                
                <section className='contact__info'>
                    <div className='cont__1'>
                        <IonIcon style={{color: "#FF6B00", paddingRight:"0.5em", fontSize:"1.5em"}} icon={locationOutline}></IonIcon>
                        <div>
                            <p>Lagos, Nigeria</p>
                            <p>eberejuliet@gmail.com</p>
                        </div>
                    </div>
                    
                    <div className='cont__2'>                        
                        <p>+234 (0) 802 000 0000</p>
                        <p>14th December, 1985</p>                        
                    </div>
                </section>
                <section className='edit__btn'>
                    <a href="#">Edit profile</a>
                </section>
                <hr /><hr />

                <section className='c__products'>
                    <IonToolbar>
                        <IonTitle slot='start' style={{fontSize:"90%"}}>Client products</IonTitle>
                        <IonButtons slot="end">
                            <IonButton style={{color:"#FF6B00", fontSize:"70%"}}>View more</IonButton>
                        </IonButtons>
                    </IonToolbar>
                    
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <IonCard>
                            <img alt="Silhouette of mountains" src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg" width="100%" />
                            <IonCardHeader>
                                <IonCardTitle style={{fontSize:"100%"}}>Mongo Park</IonCardTitle>
                                <div className='p__loc'>
                                    <IonIcon style={{color: "#FF6B00", paddingRight:"0.5em", fontSize:".8em"}} icon={locationOutline}></IonIcon>
                                    <IonCardSubtitle style={{fontSize:"60%"}}>Ketu-Epe, Lagos</IonCardSubtitle>
                                </div>
                            </IonCardHeader>
                            <div className='below__icons'>
                                <IonIcon icon={bulbOutline}></IonIcon>
                                <IonIcon icon={playOutline}></IonIcon>
                                <IonIcon icon={menuOutline}></IonIcon>
                                <div className='pp'>
                                    <p>500 sqm</p>
                                </div>
                                <IonIcon icon={heartOutline} ></IonIcon>
                            </div>
                        </IonCard>
                        <IonCard>
                            <img alt="Silhouette of mountains" src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress" width="100%" />
                            <IonCardHeader>
                                <IonCardTitle style={{fontSize:"100%"}}>Treasure Homes</IonCardTitle>
                                <div className='p__loc'>
                                    <IonIcon style={{color: "#FF6B00", paddingRight:"0.5em", fontSize:".8em"}} icon={locationOutline}></IonIcon>
                                    <IonCardSubtitle style={{fontSize:"60%"}}>Ketu-Epe, Lagos</IonCardSubtitle>
                                </div>
                            </IonCardHeader>
                            <div className='below__icons'>
                                <IonIcon icon={bulbOutline}></IonIcon>
                                <IonIcon icon={playOutline}></IonIcon>
                                <IonIcon icon={menuOutline}></IonIcon>
                                <div className='pp'>
                                    <p>500 sqm</p>
                                </div>
                                <IonIcon icon={heartOutline} ></IonIcon>
                            </div>
                        </IonCard>
                    </div>

                    <IonButton color="#FF6B00" className='b__home__btn' style={{display:"flex", justifyContent:"center", alignItems:"center"}}>Attach client to a new product</IonButton>
                </section>
            </IonContent>
        </IonPage>
    );
};

export default ClientProfile;