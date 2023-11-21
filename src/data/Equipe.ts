import axios from "axios";

export interface Equipe{
    id : number,
    nom : string,
} 

const equipes : Equipe[] = [
    {id : 1,nom : "Golden state"},
    {id : 2,nom : "Red bull"},
    {id : 3,nom : "Ferari"},
    {id : 4,nom : "Aston Martin"},
    {id : 5,nom : "Aston Villa"},
]

export const getEquipes =async () => {
    const link  = "http://192.168.43.136:8080/equipes";
    await axios.get(link).then(response =>{
        return response.data;
    });
};

export const getEquipe = (id: number) => {
    const link : string = "http://192.168.43.136:8080/equipes/"+id;
    axios.get(link).then(response =>{
        return response.data;
    });
};
