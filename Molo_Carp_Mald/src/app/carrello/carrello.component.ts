import { Component } from '@angular/core';
import { CarrelloService } from '../carrello.service';
import { Scarpa } from '../models/model';
import { Observable } from 'rxjs';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent {
  carrello$: Observable<Scarpa[]>;
  userEmail: string;  // Email dell'utente
  userName: string;   // Nome dell'utente

  constructor(private carrelloService: CarrelloService) {
    this.carrello$ = this.carrelloService.carrello$;
  }

  rimuoviDalCarrello(scarpa: Scarpa) {
    this.carrelloService.rimuoviDalCarrello(scarpa);
  }

  acquista() {
    this.carrello$.subscribe(scarpe => {
      if (scarpe.length > 0) {
        const carrelloDetails = scarpe.map(scarpa => `${scarpa.nome} - Taglia: ${scarpa.taglia.join(', ')} - Prezzo: ${scarpa.prezzo} Euro`).join('\n');

        const templateParams = {
          to_name: 'LaCollection',
          from_name: this.userName, // Nome del negozio o mittente
          from_email: this.userEmail,
          message: carrelloDetails
        };

        emailjs.send('service_5dwp0dh', 'template_5etnwcx', templateParams, 'EqIHnQqM6Lifb9kj0')
          .then((response) => {
            alert('Email inviata con successo!');
            this.carrelloService.svuotaCarrello(); // Svuota il carrello
          }, (error) => {
            alert('Invio email fallito...');
          });
      } else {
        alert('Il carrello è vuoto.');
      }
    });
  }
}
