import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TokenResponse } from './auth.inerface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  http = inject(HttpClient)
  basApiUrl: string = 'https://icherniakov.ru/yt-course/auth/'

  token: string | null = null
  refreshToken: string | null = null


  get isAuth() {
    console.log(this.token)
    return !!this.token
  }

  login(payload: ({ username: string, password: string })) {
    const fd: FormData = new FormData()

    fd.append('username', payload.username)
    fd.append('password', payload.password)
    return this.http.post<TokenResponse>(`${this.basApiUrl}token`, fd).pipe(
      tap(val => {
        this.token = val.access_token
        this.refreshToken = val.refresh_token
      })
    )
  }
}
