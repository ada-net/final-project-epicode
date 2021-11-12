import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iinvoicetable } from '../interfaces/iinvoicetable';
import { Iinvoice } from '../interfaces/iinvoice';
import { Inewinvoice } from '../interfaces/inewinvoice';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  urlAPI = environment.urlAPI + '/api/fatture?page=0&size=500&sort=anno,ASC';
  urlAPIDetail = environment.urlAPI + '/api/fatture/';
  urlAPIDelete = environment.urlAPI + '/api/fatture/';
  urlAPICreate = environment.urlAPI + '/api/fatture';
  urlAPIUpdate = environment.urlAPI + '/api/fatture/';
  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM4NzQzNCwiZXhwIjoxNjM3MjUxNDM0fQ.kA_vFKsUjBx0R6cuXlpVFr4Acsu5xciEr3CnAf19GLr9Rer_k6NmKOuvzk6BLZ_BnPY5-XG2Ztp0LbVcl8lMNw';
  tenantID = 'fe_0421';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getAllInvoices() {
    return this.http.get<Iinvoicetable>(this.urlAPI);
  }

  getInvoice(id: number) {
    return this.http.get<Iinvoice>(this.urlAPIDetail + id + '?1');
  }

  createInvoice(item: Inewinvoice) {
    return this.http.post(this.urlAPICreate, item);
  }

  updateInvoice(item: Iinvoice) {
    return this.http.put(this.urlAPIUpdate + item.id, item);
  }

  removeInvoice(item: Iinvoice) {
    return this.http.delete(this.urlAPIDelete + item.id);
  }
}
