import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {
  urlAPI = environment.urlAPI + '/api/clienti?size=100&sort=id,ASC';
  /* bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM4NzQzNCwiZXhwIjoxNjM3MjUxNDM0fQ.kA_vFKsUjBx0R6cuXlpVFr4Acsu5xciEr3CnAf19GLr9Rer_k6NmKOuvzk6BLZ_BnPY5-XG2Ztp0LbVcl8lMNw';
  tenantID = 'fe_0421';
  headers = new HttpHeaders(); */

  constructor(private http: HttpClient) {
    /* this.headers = this.headers
                      .set("Authorization", 'Bearer ' + this.bearerAuth)
                      .set("X-TENANT-ID", this.tenantID); */
  }

  getAllClients() {
    /* return this.http.get(this.urlAPI, {headers: this.headers}); */
    return this.http.get(this.urlAPI);
  }
}


