import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
  constructor(private http: Http) { }

  login(username: string, password: string) {
    let headers = new Headers({ 'content-type': 'application/json' });

    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:8081/authenticate', JSON.stringify({ username: username, password: password }), options)
      .map(res => res.json());

  }

  changePW(oldPW: string, newPW: string) {
    let headers = new Headers({ 'content-type': 'application/json' });

    let options = new RequestOptions({ headers: headers });

 return   this.http.post('http://localhost:8081/changepassword', JSON.stringify({ oldPassword: oldPW, password: newPW }), options)
      .map(res => res.json());
  }

 
}