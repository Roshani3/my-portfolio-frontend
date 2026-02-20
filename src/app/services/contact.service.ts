import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  //private apiUrl = 'http://localhost:5000/api/Contact/send';
 private apiUrl ='https://my-portfolio-backend-1-mpl5.onrender.com/api/Contact/send';
  constructor(private http: HttpClient) {}

  sendMessage(message: ContactMessage) {
    return this.http.post(this.apiUrl, message);
  }
}