import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'multipart/form-data'
  })
};

@Injectable({
  providedIn: 'root'
})


export class ZiperaseService {

  constructor(private http: HttpClient) {

   }

  login (data) {
    const formData = new FormData()
    formData.append('username', data.username)
    formData.append('password', data.password)
    return this.http.post<any>(`${environment.baseURL}/login/access-token`, formData)
  }

  testToken (token) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    }
    return this.http.post(`${environment.baseURL}/login/test-token`, {}, httpOptions)
  }

  forgotPassword (email) {
    const formData = new FormData()
    formData.append('email', email)
    return this.http.post<any>(`${environment.baseURL}/recover-password`,formData);
  }

  resetPassword (token, newPassword) {
    const formData = new FormData()
    formData.append('token', token);
    formData.append('new_password', newPassword);
    return this.http.post<any>(`${environment.baseURL}/reset-password`, formData);
  }


}
