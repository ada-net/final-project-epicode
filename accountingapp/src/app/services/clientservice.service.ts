import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iclienttable } from '../interfaces/iclienttable';
import { Iclient } from '../interfaces/iclient';
import { INEWclient } from '../interfaces/i-newclient';


@Injectable({
  providedIn: 'root'
})

export class ClientserviceService {
  urlAPI = environment.urlAPI + '/api/clienti?size=200&sort=id,ASC';
  urlAPIDetail = environment.urlAPI + '/api/clienti/';
  urlAPIUpdate = environment.urlAPI + '/api/clienti/';
  urlAPIDelete = environment.urlAPI + '/api/clienti/';
  urlAPICreate = environment.urlAPI + '/api/clienti';
  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM3OTY3NywiZXhwIjoxNjM3MjQzNjc3fQ.99dT3WmLLsm-916j-w0Y7erCDfs4P5tkD7Lbg9ZieLj07RUtf4RzwEyvNVi_CCfJWJF_wHsUwQuyirXNc0B_mg';
  tenantID = 'fe_0421';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }


  getAllClients() {
    return this.http.get<Iclienttable>(this.urlAPI);
  }

  getClient(id: number) {
    return this.http.get<Iclient>(this.urlAPIDetail + id);
  }

  createClient(item: INEWclient) {
    return this.http.post(this.urlAPICreate, item);
  }

  updateClient(item: Iclient) {
    return this.http.put(this.urlAPIUpdate + item.id, item);
  }

  removeClient(item: Iclient) {
    return this.http.delete(this.urlAPIDelete + item.id);
  }

}


