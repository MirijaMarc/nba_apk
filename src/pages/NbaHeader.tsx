import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";

const NbaHeader : React.FC = ()=>{
    const history = useHistory();
    
    const redirectToHall = ()=>{
        history.push("/");
    }
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle onClick={redirectToHall} style={{cursor : "pointer",width : "fit-content" }}>Nba Statistics</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
} 

export default NbaHeader;