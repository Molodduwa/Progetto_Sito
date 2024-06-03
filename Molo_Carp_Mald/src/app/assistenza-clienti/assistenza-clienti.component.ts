import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-assistenza-clienti',
  templateUrl: './assistenza-clienti.component.html',
  styleUrls: ['./assistenza-clienti.component.css']
})
export class AssistenzaClientiComponent {
  nome: string = 'LaCollection';
  creatore: string = 'Andri, Nick e Jacopo';
  email: string = 'INVII UNA EMAIL DIRETTAMENTE A NOI!';
  telefono: string = '+39 349 232 2345';
  userEmail: string = '';
  messaggio: string = '';

  constructor() { }

  inviaMessaggio() {
    const templateParams = {
      user_email: this.userEmail,
      message: this.messaggio,
      from_name: this.nome
    };

    emailjs.send('service_5dwp0dh', 'template_q9o01oc', templateParams, 'EqIHnQqM6Lifb9kj0')
      .then((result: EmailJSResponseStatus) => {
        alert('Email inviata con successo');
        this.resetForm();
      }, (error) => {
        alert('Errore nell\'invio dell\'email');
      });
  }

  resetForm() {
    this.userEmail = '';
    this.messaggio = '';
  }
}
