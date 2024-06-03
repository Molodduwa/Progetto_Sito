import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Scarpa } from './models/model';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  private carrelloSubject = new BehaviorSubject<Scarpa[]>([]);
  carrello$ = this.carrelloSubject.asObservable();

  aggiungiAlCarrello(scarpa: Scarpa) {
    const currentCart = this.carrelloSubject.value;
    this.carrelloSubject.next([...currentCart, scarpa]);
  }

  rimuoviDalCarrello(scarpa: Scarpa) {
    const currentCart = this.carrelloSubject.value.filter(item => item !== scarpa);
    this.carrelloSubject.next(currentCart);
  }

  svuotaCarrello() {
    this.carrelloSubject.next([]);
  }
}
