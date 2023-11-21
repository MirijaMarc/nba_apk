import { IonItem, IonLabel, IonNote } from "@ionic/react";
import React from "react";
import { Equipe } from "../data/Equipe";

 interface EquipeProps{
    equipe : Equipe
 }
const EquipeListItem: React.FC<EquipeProps> = ({equipe}) => {
    return (
        <IonItem mode="ios"  style={{margin : "2px",borderRadius : "2px",background : "none"}}  routerLink={`/equipes/${equipe.id}`} detail={false}>
            <IonLabel mode="ios" className="ion-text-wrap" >
                <h2 style={{padding : "1%"}}>
                {equipe.nom}
                </h2>
            </IonLabel>
        </IonItem>
    
    );
}

export default EquipeListItem;