import { Component } from '@angular/core';
import { Scarpa } from '../models/model';
@Component({
  selector: 'app-collezione',
  templateUrl: './collezione.component.html',
  styleUrls: ['./collezione.component.css']
})
export class CollezioneComponent {
  scarpe:Scarpa[];
  constructor(){
    // Creazione di un'istanza di Scarpa
    const scarpa: Scarpa = new Scarpa(
      'Nome della scarpa',
      'Descrizione',
      42, // Taglia
      '2023-01-01', // Data di uscita
      'Nero', // Colorazione
      99.99, // Prezzo
      'percorso/immagine_scarpa.jpg' // Percorso dell'immagine
    );
    
  }
}
