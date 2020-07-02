import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
 nomClient: string;
  constructor() { }

  ngOnInit(): void {
    this.nomClient=localStorage.getItem('nom');
  }

}
