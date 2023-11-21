import { IonList, IonPage, IonTitle } from "@ionic/react";
import React, { useEffect, useState } from "react";
import NbaHeader from "./NbaHeader";
import { Equipe } from "../data/Equipe";
import EquipeListItem from "../components/EquipeListItem";
import axios from "axios";

const Home : React.FC =()=>{

    const [equipes , setEquipes] = useState<Equipe[]>([])

     useEffect(()=>{
        getAsyncEquipes();
    },[])

    function getAsyncEquipes() :void{
        const link  = "http://192.168.43.136:8080/equipes";

        axios.get(link).then((response) =>{
            setEquipes(response.data);
        });
    }
    return (    
        <IonPage id="home-page" style={{display : "flex",justifyContent : "flex-start"}}>
            <NbaHeader page="/"/>
            <h2 style={{color : "#000",padding : "1%"}}>Les equipes</h2>
            <IonList>
                {equipes.map(eq => <EquipeListItem key={eq.id}  equipe={eq} />)}
            </IonList>
        </IonPage>
    )
}

export default Home;