import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonContent } from '@ionic/react'
import React, { Component } from 'react'
import ExploreContainer from '../components/ExploreContainer'

export class About extends Component {
  render() {
    return (
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>About@Sam</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <div id="container">
          <strong>This is About Us Page</strong>
        </div>
        </IonContent>
      </IonPage>
    )
  }
}

export default About