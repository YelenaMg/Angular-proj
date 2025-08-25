import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TokenResponse } from './auth.inerface';
import { tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  http = inject(HttpClient)
  cookieService = inject(CookieService)
  basApiUrl: string = 'https://icherniakov.ru/yt-course/auth/'

  token: string | null = null
  refreshToken: string | null = null


  get isAuth() {
    console.log(!!this.token)
    if (!this.token) {
      this.token = this.cookieService.get('token')
    }
    return !!this.token
  }

  login(payload: ({ username: string, password: string })) {
    const fd: FormData = new FormData()
    console.log(!!this.token, 'tok bool')
    fd.append('username', payload.username)
    fd.append('password', payload.password)
    return this.http.post<TokenResponse>(`${this.basApiUrl}token`, fd).pipe(
      tap(val => {
        this.token = val.access_token
        this.refreshToken = val.refresh_token
        this.cookieService.set('token', this.token)
        this.cookieService.set('refreshToken', this.refreshToken)
      })
    )
  }
}
