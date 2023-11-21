import MessageListItem from '../components/MessageListItem';
import { useEffect, useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import NbaHeader from './NbaHeader';
import { Equipe, getEquipes } from '../data/Equipe';
import EquipeItem from '../components/EquipeItem';

const Home: React.FC = () => {

  const [equipes, setEquipes] = useState<Equipe[]>([]);

  useEffect(() => {
    const eqp = getEquipes();
    setEquipes(eqp);

    console.log(eqp);
    
  },[]);

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <NbaHeader />
      <div style={{padding : "1%" }}>
        <h3>Les équipes</h3>
      </div>
    <IonList   style={{background : "none",padding : "1%"}}>
      {equipes.map(eqp => <EquipeItem key={eqp.id} equipe={eqp}/>)}
    </IonList>
    </IonPage>
  );
};

export default Home;
