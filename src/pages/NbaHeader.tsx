import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";

interface HeaderProps{
    page : string;
}
const NbaHeader : React.FC<HeaderProps> = ({page})=>{

    const history = useHistory();
    
    const redirectToHall = ()=>{
        history.push("/");
    }
    const goBack = ()=>{
        history.push("/");
    }
    if (page == "/") {
        return (
            <IonHeader>
                <IonToolbar>
                
                    <IonTitle style={{cursor : "pointer",width : "fit-content" ,display : "flex",alignItems : "center",justifyContent : "space-arround",flexDirection : "row"}} onClick={redirectToHall}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcay_lYXBfMEUO9NOxNOUdFl_NQlEAtXUP62_kj0phQQ&s" alt=""  width={100} height={50}/> </IonTitle>
                </IonToolbar>
            </IonHeader>
        )
    }else{
        return (
            <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton defaultHref="/" />
              </IonButtons>
              <IonTitle style={{ cursor: 'pointer', width: 'fit-content' }}>Retour</IonTitle>
            </IonToolbar>
          </IonHeader>
        )
    }
} 

export default NbaHeader;