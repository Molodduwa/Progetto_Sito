import { Component, OnInit } from '@angular/core';
import { Scarpa } from '../models/model';
import { HttpClient } from '@angular/common/http';
import { CarrelloService } from '../carrello.service';

@Component({
  selector: 'app-collezione',
  templateUrl: './collezione.component.html',
  styleUrls: ['./collezione.component.css']
})
export class CollezioneComponent implements OnInit {
  scarpe: Scarpa[];

  constructor(private http: HttpClient, private carrelloService: CarrelloService) {}

  ngOnInit(): void {
    this.http.get('https://3000-molodduwa-progettosito-nc2ilv3vwvm.ws-eu114.gitpod.io/api').subscribe(data => {
      this.scarpe = data["scarpe"];
    });
  }

  aggiungiAlCarrello(scarpa: Scarpa) {
    this.carrelloService.aggiungiAlCarrello(scarpa);
    alert('è stato aggiunto un elemento al tuo carrello');
  }
}
