import { IonItem, IonLabel, IonNote } from "@ionic/react";
import React from "react";
import { Equipe } from "../data/Equipe";
import { Joueur } from "../data/Joueur";

 interface JoueurProps{
    joueur : Joueur
 }
const JoueurItem: React.FC<JoueurProps> = ({joueur}) => {
    return (
        <IonItem mode="ios"  style={{margin : "2px",borderRadius : "2px",background : "none"}}  detail={false}>
            <IonLabel mode="ios" className="ion-text-wrap" >
                <h2 style={{padding : "1%"}}>
                    {joueur.nom}
                </h2>
            </IonLabel>
        </IonItem>
    
    );
}

export default JoueurItem;