import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IinvoiceStatuses } from '../interfaces/iinvoice-statuses';

@Injectable({
  providedIn: 'root'
})

export class PaidStatusServiceService {
  urlAPI = environment.urlAPI + '/api/statifattura?page=0&size=20&sort=id,ASC';
  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM4NzQzNCwiZXhwIjoxNjM3MjUxNDM0fQ.kA_vFKsUjBx0R6cuXlpVFr4Acsu5xciEr3CnAf19GLr9Rer_k6NmKOuvzk6BLZ_BnPY5-XG2Ztp0LbVcl8lMNw';
  tenantID = 'fe_0421';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }
  getAllStatuses() {
    return this.http.get<IinvoiceStatuses>(this.urlAPI);
  }
}

