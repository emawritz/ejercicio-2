import React from 'react';
import { IonImg,IonGrid, IonRow, IonCol } from '@ionic/react';
import embarazo from '../img/embarazo.png';
import baby from '../img/baby.png';

const Stages: React.FC = () => (
    <div style={{height:'fit-content'}}>
    <h5>Descubre por etapas...</h5>
    <IonGrid className="grid-box">
    <IonRow>
    <IonCol>
      <div className="box">
      <svg className="vector" width="80" height="80" viewBox="0 0 267 267" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5.79593" y="193.389" width="200" height="200" rx="37" transform="rotate(-69.9428 5.79593 193.389)" fill="#ffbc00"/>
        <rect x="84.6362" y="266.216" width="200" height="200" rx="37" transform="rotate(-114.784 84.6362 266.216)" fill="#ffbc00"/>
      </svg>
       <IonImg className="mg" src={embarazo}/>
       <p style={{color :'#ffbc00'}}>Embarazo</p>
      </div>
    </IonCol>
    <IonCol>
      <div className="box">
      <svg className="vector" width="80" height="80" viewBox="0 0 267 267" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5.79593" y="193.389" width="200" height="200" rx="37" transform="rotate(-69.9428 5.79593 193.389)" fill="#ff757b"/>
        <rect x="84.6362" y="266.216" width="200" height="200" rx="37" transform="rotate(-114.784 84.6362 266.216)" fill="#ff757b"/>
      </svg>
       <IonImg className="mg" src={baby}/>
       <p style={{color :'#ff757b'}}>0-12 m</p>
      </div>
    </IonCol>
    <IonCol>
      <div className="box">
      <svg className="vector" width="80" height="80" viewBox="0 0 267 267" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5.79593" y="193.389" width="200" height="200" rx="37" transform="rotate(-69.9428 5.79593 193.389)" fill="#01e2c0"/>
        <rect x="84.6362" y="266.216" width="200" height="200" rx="37" transform="rotate(-114.784 84.6362 266.216)" fill="#01e2c0"/>
      </svg>
       <IonImg className="mg" src={baby}/>
       <p style={{color:'#01e2c0'}}>12-24 m</p>
      </div>
    </IonCol>
    <IonCol>
      <div className="box">
      <svg className="vector" width="80" height="80" viewBox="0 0 267 267" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5.79593" y="193.389" width="200" height="200" rx="37" transform="rotate(-69.9428 5.79593 193.389)" fill="#7392f1"/>
        <rect x="84.6362" y="266.216" width="200" height="200" rx="37" transform="rotate(-114.784 84.6362 266.216)" fill="#7392f1"/>
      </svg>
       <IonImg className="mg" src={baby}/>
       <p style={{color: '#7392f1'}}>24-36 m</p>
      </div>
    </IonCol>
  </IonRow>
    </IonGrid>
    </div>
);
export default Stages;