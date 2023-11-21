import { IonList, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NbaHeader from "./NbaHeader";
import axios from "axios";
import { Joueur } from "../data/Joueur";
import JoueurItem from "../components/JoueurItem";

const DetailEquipe : React.FC = ()=>{
    const { id } = useParams<{ id: string }>();

    useEffect(()=>{
        getAsyncJoueurs();
    },[]);

    const [joueurs,setJoueurs] = useState<Joueur[]>([]);
    function getAsyncJoueurs() {
        const link = "http://192.168.43.136:8080/joueurs?id_equipe="+id;
        
        axios.get(link).then((response) =>{
            setJoueurs(response.data);
        });
    }
    return (
        <IonPage id="detail-equipe-page" style={{display : "flex",justifyContent : "flex-start"}}>
            <NbaHeader page="detail" />

            <IonList>
                {joueurs.map(j => <JoueurItem key={j.id} joueur={j} />)}
            </IonList>
        </IonPage>
    );
}

export default DetailEquipe;