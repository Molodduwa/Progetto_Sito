import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollezioneComponent } from './collezione/collezione.component';
import { AssistenzaClientiComponent } from './assistenza-clienti/assistenza-clienti.component';
import { CarrelloComponent } from './carrello/carrello.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Collezione', component:CollezioneComponent }, 
  { path: 'Home', component:HomeComponent }, 
  { path: 'Assistenza', component:AssistenzaClientiComponent }, 
  { path: 'Carrello', component: CarrelloComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
