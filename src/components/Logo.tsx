import React from 'react';
import { IonItem, IonImg, IonContent } from '@ionic/react';
import logo from '../img/logo-famihood.png'


export const Logo: React.FC = () => (
  <IonContent>
        <IonItem>
            <IonImg src={logo}/>        
        </IonItem>
  </IonContent>
);