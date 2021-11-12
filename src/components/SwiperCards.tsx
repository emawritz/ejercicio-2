import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonGrid} from '@ionic/react';
import React from 'react';
import { flash, heart, heartOutline } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const SwiperCards: React.FC = () => (
    <IonGrid className="grid-box slide2">
    <h6><IonIcon className="flash" icon={flash}/>Nuevos lanzamientos</h6>
    <Swiper slidesPerView={5} loop={false} spaceBetween={5}>
        <SwiperSlide className="slide">
        <IonCard className="card-slide-new">
        <IonCardHeader className="card-head">
          <IonIcon className="icon" icon={heart}/>
          <div className="new">NUEVO</div>
          </IonCardHeader>
          <div className="box-card">
            <IonCardTitle>Preparacion para el nacimiento de Juan Carlos</IonCardTitle>
            <IonCardSubtitle>Coaching • 12min</IonCardSubtitle>
          </div>
        </IonCard>
        </SwiperSlide>
        <SwiperSlide className="slide">
        <IonCard className="card-slide">
        <IonCardHeader className="card-head">
          <IonIcon className="icon" icon={heartOutline}/>
        </IonCardHeader>
          <div className="box-card">
            <IonCardTitle>Masajes para el bebe</IonCardTitle>
            <IonCardSubtitle>Ejercicios • 12min</IonCardSubtitle>
          </div>
        </IonCard>
        </SwiperSlide>
        <SwiperSlide className="slide">
        <IonCard className="card-slide">
        <IonCardHeader className="card-head">
          <IonIcon className="icon" icon={heartOutline}/>
        </IonCardHeader>
          <div className="box-card">
            <IonCardTitle>Masajes para el bebe</IonCardTitle>
            <IonCardSubtitle>Ejercicios • 12min</IonCardSubtitle>
          </div>
        </IonCard>
        </SwiperSlide>
        <SwiperSlide className="slide">
        <IonCard className="card-slide-new">
        <IonCardHeader className="card-head">
          <IonIcon className="icon" icon={heart}/>
          <div className="new">NUEVO</div>
          </IonCardHeader>
          <div className="box-card">
            <IonCardTitle>Preparacion para el nacimiento de Juan Carlos</IonCardTitle>
            <IonCardSubtitle>Coaching • 12min</IonCardSubtitle>
          </div>
        
        </IonCard>
        </SwiperSlide>
        
       
      </Swiper>
    </IonGrid>
);
export default SwiperCards;