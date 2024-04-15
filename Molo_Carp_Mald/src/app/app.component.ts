import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scarpa } from './models/model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    scarpe: Scarpa[];
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}
    ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('/api').subscribe(data => {
    // Read the result field from the JSON response.
    this.scarpe = data["scarpe"];
    });
    }
}
