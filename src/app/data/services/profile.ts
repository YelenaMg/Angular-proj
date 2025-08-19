import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http: HttpClient = inject(HttpClient)
  // basApiUrl: string = 'https://jsonplaceholder.typicode.com/'
  basApiUrl: string = 'https://icherniakov.ru/yt-course/'

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.basApiUrl}account/test_accounts`)
  }
}
