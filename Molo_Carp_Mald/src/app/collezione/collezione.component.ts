import { Component, OnInit} from '@angular/core';
import { Scarpa } from '../models/model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-collezione',
  templateUrl: './collezione.component.html',
  styleUrls: ['./collezione.component.css']
})
export class CollezioneComponent implements OnInit {
  scarpe: Scarpa[];
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}
    ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://3000-molodduwa-progettosito-qw9ym6b95zq.ws-eu110.gitpod.io/api').subscribe(data => {
    // Read the result field from the JSON response.
    this.scarpe = data["scarpe"];
    });
    }
}
