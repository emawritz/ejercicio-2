import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import Stages from '../components/Stages';
import TopBar from '../components/TopBar';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <TopBar/>
      <IonContent fullscreen>
        <div style={{marginTop :'5rem'}}>
        <Stages/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
