import { IonContent, IonPage, IonImg} from '@ionic/react';
import React from 'react';
import './Tab1.css';
import 'swiper/swiper-bundle.min.css';
import TopBar from '../components/TopBar';
import CardHome from '../components/CardHome';
import Stages from '../components/Stages';
import SwiperCards from '../components/SwiperCards';
import '@ionic/react/css/ionic-swiper.css';
import shape from '../img/Vector-2.png';

const Tab1: React.FC = () => {
  return (
      <IonPage>
        <TopBar/>
      <IonContent fullscreen className="back">
        <CardHome/>
        <div className="shape1"></div>
        <div className="shape2"></div>
        <IonImg className="shape3" src={shape}/>
        <Stages/>
        <SwiperCards/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
