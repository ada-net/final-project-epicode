import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iinvoicetable } from '../interfaces/iinvoicetable';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  urlAPI = environment.urlAPI + '/api/fatture?page=0&size=100&sort=anno,ASC';
  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM4NzQzNCwiZXhwIjoxNjM3MjUxNDM0fQ.kA_vFKsUjBx0R6cuXlpVFr4Acsu5xciEr3CnAf19GLr9Rer_k6NmKOuvzk6BLZ_BnPY5-XG2Ztp0LbVcl8lMNw';
  tenantID = 'fe_0421';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getAllInvoices() {
    return this.http.get<Iinvoicetable>(this.urlAPI);
  }
}
