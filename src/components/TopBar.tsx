import React from 'react';
import { IonToolbar, IonImg, IonIcon } from '@ionic/react';
import logo from '../img/logo-famihood-1.png';
import { notificationsOutline, peopleOutline} from 'ionicons/icons';
import './TopBar.css';


const TopBar: React.FC = () => (
    <IonToolbar className="ion-no-border" color="transparent">
        <IonImg slot="start" className="logo" src={logo}/>      
            <IonIcon slot="end" id="notification" className="button" icon={notificationsOutline} />       
        <IonIcon slot="end" id="people" className="button" icon={peopleOutline} />     
  </IonToolbar>
);
export default TopBar;