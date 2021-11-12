import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iprovinces } from '../interfaces/iprovinces';
import { Iprovince } from '../interfaces/iprovince';

@Injectable({
  providedIn: 'root'
})
export class ProvinceserviceService {

  urlAPI = environment.urlAPI + '/api/province?page=0&size=20&sort=id,ASC';
  urlAPIDetail = environment.urlAPI + '/api/province/';
  urlAPIUpdate = environment.urlAPI + '/api/province/';
  urlAPIDelete = environment.urlAPI + '/api/province/';
  urlAPICreate = environment.urlAPI + '/api/province/';
  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM4NzQzNCwiZXhwIjoxNjM3MjUxNDM0fQ.kA_vFKsUjBx0R6cuXlpVFr4Acsu5xciEr3CnAf19GLr9Rer_k6NmKOuvzk6BLZ_BnPY5-XG2Ztp0LbVcl8lMNw';
  tenantID = 'fe_0421';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }


  getAllProvinces() {
    return this.http.get<Iprovinces>(this.urlAPI);
  }

  getProvince(id: number) {
    return this.http.get<Iprovince>(this.urlAPIDetail + id);
  }

  createProvince(item: Iprovince) {
    return this.http.post(this.urlAPICreate, item);
  }

  updateProvince(item: Iprovince) {
    return this.http.put(this.urlAPIUpdate + item.id, item);
  }

  removeProvince(item: Iprovince) {
    return this.http.delete(this.urlAPIDelete + item.id);
  }
}





