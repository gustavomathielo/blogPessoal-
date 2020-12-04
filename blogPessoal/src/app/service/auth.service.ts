import { UserLogin } from './../model/UserLogin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin) {
    return this.http.post('http://localhost:8080/usuarios/logar', userLogin)
  }

  cadastrar(user: User) {
    return this.http.post('http://localhost:8080/usuarios/cadastrar', user)
  }
