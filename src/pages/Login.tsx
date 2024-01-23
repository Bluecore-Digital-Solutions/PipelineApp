// Login.tsx
import React from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Login: React.FC = () => {
  return (

<IonPage id="main">
<IonHeader>
  <IonToolbar>
    <IonTitle>Login@Sam</IonTitle>
    <IonButtons slot="start">
      <IonMenuButton></IonMenuButton>
    </IonButtons>
  </IonToolbar>
</IonHeader>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-8">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <IonInput
              className="border-2 border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
              id="username"
              type="text"
              placeholder="Enter your username">
            </IonInput>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <IonInput
              className="border-2 border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
              id="password"
              type="password"
              placeholder="Enter your password">
            </IonInput>
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );

{/*   <ExploreContainer /> */}
</IonPage>
  );
};

export default Login;
