import { Component, OnInit } from '@angular/core';
import { ClientserviceService } from './../services/clientservice.service';
import { Iclient } from '../interfaces/iclient';
import { ActivatedRoute, Router } from '@angular/router';
import { Imunicipalities } from '../interfaces/imunicipalities';
import { Iprovinces } from '../interfaces/iprovinces';
import { Iclienttypes } from '../interfaces/iclienttypes';
import { ClientTypeServiceService } from '../services/client-type-service.service';
import { MunicipalityserviceService } from '../services/municipalityservice.service';
import { ProvinceserviceService } from '../services/provinceservice.service';

@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.css']
})
export class EditclientComponent implements OnInit {

  client!: Iclient;

  municipalities: any = [];

  provinces: any = [];

  clientTypes: any = [];


  constructor(
    private clientService: ClientserviceService,
    private router: Router,
    private municipalityService: MunicipalityserviceService,
    private provinceService: ProvinceserviceService,
    private clientTypeService: ClientTypeServiceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (element.id) {
        this.clientService.getClient(element.id).subscribe(client => this.client = client);
      }
    });
    this.getMunicipalities();
    this.getProvinces();
    this.getClientTypes()
  }

  getMunicipalities() {
    this.municipalityService.getAllMunicipalities().subscribe(response =>
      this.municipalities = response.content);
  }

  getProvinces() {
    this.provinceService.getAllProvinces().subscribe(response =>
      this.provinces = response.content);
  }

  getClientTypes() {
    this.clientTypeService.getAllTypes().subscribe(response =>
      this.clientTypes = response);
  }

  saveClient() {
    console.log('Update Client');
    this.clientService.updateClient(this.client).subscribe(response => console.log(response));
    this.router.navigate(['clients/list']);
  }

}
