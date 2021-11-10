import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Imunicipalities } from '../interfaces/imunicipalities';
import { Imunicipality } from '../interfaces/imunicipality';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityserviceService {

  urlAPI = environment.urlAPI + '/api/comuni?page=0&size=20&sort=id,ASC';
  urlAPIDetail = environment.urlAPI + '/api/comuni/';
  urlAPIUpdate = environment.urlAPI + '/api/comuni/';
  urlAPIDelete = environment.urlAPI + '/api/comuni/';
  urlAPICreate = environment.urlAPI + '/api/comuni/';
  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM4NzQzNCwiZXhwIjoxNjM3MjUxNDM0fQ.kA_vFKsUjBx0R6cuXlpVFr4Acsu5xciEr3CnAf19GLr9Rer_k6NmKOuvzk6BLZ_BnPY5-XG2Ztp0LbVcl8lMNw';
  tenantID = 'fe_0421';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }


  getAllMunicipalities() {
    return this.http.get<Imunicipalities>(this.urlAPI);
  }

  getMunicipality(id:number){
    return this.http.get<Imunicipality>(this.urlAPIDetail+id);
  }

  createMunicipality(item: Imunicipality) {
    return this.http.post(this.urlAPICreate, item);
  }

  updateMunicipality(item: Imunicipality) {
    return this.http.put(this.urlAPIUpdate+item.id, item);
  }

  removeMunicipality(item:Imunicipality) {
    return this.http.delete(this.urlAPIDelete+item.id);
  }
  
}



