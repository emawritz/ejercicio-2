import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon,} from '@ionic/react';
import { star} from 'ionicons/icons';
import './CardHome.css';

const CardHome: React.FC = () => (
    <IonCard className="card-top">
          <IonCardHeader>
            <IonCardSubtitle>
              <IonIcon className="star" icon={star}/>Recomendado para tí
              </IonCardSubtitle>
            <IonCardTitle>¿Es necesario preparse para amamantar?</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Embarazo • Alimentacion • 12 Min
          </IonCardContent>
        </IonCard>
);
export default CardHome;