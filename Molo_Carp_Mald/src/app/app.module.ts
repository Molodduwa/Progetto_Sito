import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CollezioneComponent } from './collezione/collezione.component';
import { AssistenzaClientiComponent } from './assistenza-clienti/assistenza-clienti.component';
import { FormsModule } from '@angular/forms';
import { CarrelloComponent } from './carrello/carrello.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollezioneComponent,
    AssistenzaClientiComponent,
    CarrelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
