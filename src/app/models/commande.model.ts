export class Commande {
     status: boolean;
     commentaire: string
    constructor(
         
         public nom: string,public prenom: string,
         public ville: string,public numero: number,
         public adresse: string,public type: string,
         public colis: string,public montant: string,
         public paymant: string){}
   }