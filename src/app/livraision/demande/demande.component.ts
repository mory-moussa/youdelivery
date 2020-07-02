import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Commande } from  '../../models/commande.model';
@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  commandeForm: FormGroup;
  nomClient: string;
  prenomClient:string;
  adresseClient:string;
  numeroClient: string;
  constructor(
    private formBuilder:FormBuilder,
    private router: Router) { }

    ngOnInit() {
      this.initForm();
      this.nomClient =localStorage.getItem('nom'); 
      this.prenomClient =localStorage.getItem('prenom');
      this.adresseClient =localStorage.getItem('ville');
      this.numeroClient =localStorage.getItem('telephone');
    }
   
    initForm(){
      this.commandeForm= this.formBuilder.group({
        idClient:['10',[Validators.required]],
        nom:['',[Validators.required]],
        prenom:['',[Validators.required]],
        ville:['',[Validators.required]],
        numero:['',[Validators.required]],
        adresse:['',[Validators.required]],
        type:['',[Validators.required]],
        colis:['',[Validators.required]],
        montant:['1850',[Validators.required]],
        condition:['',[Validators.required]],
        paymant:['',[Validators.required]],
        commentaire:''
      }
      );
    }
   
    onConfirmer(){
      const nom = this.commandeForm.get('nom').value;
      const prenom = this.commandeForm.get('prenom').value;
      const ville = this.commandeForm.get('ville').value;
      const numero = this.commandeForm.get('numero').value;
      const adresse = this.commandeForm.get('adresse').value;
      const type = this.commandeForm.get('type').value;
      const colis = this.commandeForm.get('colis').value;
      const montant = this.commandeForm.get('montant').value;
      const paymant = this.commandeForm.get('paymant').value;
      const newCommande= new Commande(nom,prenom,ville,numero,adresse,type,colis,montant,paymant);
         newCommande.commentaire = this.commandeForm.get('commentaire').value;
      console.log(newCommande)
    }

}
