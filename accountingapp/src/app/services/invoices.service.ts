import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  urlAPI = environment.urlAPI + '/api/fatture?page=0&size=20&sort=id,ASC';

  constructor(private http: HttpClient) { }

  getAllInvoices() {
    return this.http.get(this.urlAPI);
  }
}
