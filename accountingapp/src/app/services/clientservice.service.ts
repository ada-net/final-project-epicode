import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iclienttable } from '../interfaces/iclienttable';
import { Iclient } from '../interfaces/iclient';


@Injectable({
  providedIn: 'root'
})

export class ClientserviceService {
  urlAPI = environment.urlAPI + '/api/clienti?size=150&sort=id,ASC';
  urlAPIDetail = environment.urlAPI + '/api/clienti/';
  urlAPIUpdate = environment.urlAPI + '/api/clienti/';
  urlAPIDelete = environment.urlAPI + '/api/clienti/';
  urlAPICreate = environment.urlAPI + '/api/clienti/';
  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM4NzQzNCwiZXhwIjoxNjM3MjUxNDM0fQ.kA_vFKsUjBx0R6cuXlpVFr4Acsu5xciEr3CnAf19GLr9Rer_k6NmKOuvzk6BLZ_BnPY5-XG2Ztp0LbVcl8lMNw';
  tenantID = 'fe_0421';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }


  getAllClients() {
    return this.http.get<Iclienttable>(this.urlAPI);
  }

  getClient(id:number){
    return this.http.get<Iclient>(this.urlAPIDetail+id);
  }

  createClient(item: Iclient) {
    return this.http.post(this.urlAPICreate, item);
  }

  updateClient(item: Iclient) {
    return this.http.put(this.urlAPIUpdate+item.id, item);
  }

  removeClient(item:Iclient) {
    return this.http.delete(this.urlAPIDelete+item.id);
  }
  
}


