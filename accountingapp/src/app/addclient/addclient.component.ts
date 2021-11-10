import { Component, OnInit } from '@angular/core';
import { Iclient } from '../interfaces/iclient';
import { Imunicipalities } from '../interfaces/imunicipalities';
import { Iprovinces } from '../interfaces/iprovinces';
import { ClientserviceService } from '../services/clientservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MunicipalityserviceService } from '../services/municipalityservice.service';
import { ProvinceserviceService } from '../services/provinceservice.service';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {

  title!: string;
  
  municipalities: any = [];

  provinces: any = [];

  client: Iclient = {
    ragioneSociale: '',
    partitaIva: 0,
    tipoCliente: '',
    email: '',
    pec: '',
    telefono: 0,
    nomeContatto: '',
    cognomeContatto: '',
    telefonoContatto: '',
    emailContatto: '',
    indirizzoSedeOperativa: {
      id: 0,
      via: '',
      civico: 0,
      cap: 0,
      localita: '',
      comune: {
        id: 0,
        nome: '',
        provincia: {
          id: 0,
          nome: '',
          sigla: '',
        }
      }
    },
    indirizzoSedeLegale: {
      id: 0,
      via: '',
      civico: 0,
      cap: 0,
      localita: '',
      comune: {
        id: 0,
        nome: '',
        provincia: {
          id: 0,
          nome: '',
          sigla: ''
        }
      }
    },
    fatturatoAnnuale: 0,
    id: 0,
  }

  constructor(
    private clientService: ClientserviceService,
    private municipalityService: MunicipalityserviceService,
    private provinceService: ProvinceserviceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if(!element.id) {
        this.title = "New Client";
      }
      if(element.id) {
        this.clientService.getClient(element.id).subscribe(response => this.client = response)
      }
    })
    this.getMunicipalities();
    this.getProvinces();
  }

  getMunicipalities(){
    this.municipalityService.getAllMunicipalities().subscribe(response => 
      this.municipalities = response.content);
  }

  getProvinces(){
    this.provinceService.getAllProvinces().subscribe(response => 
      this.provinces = response.content);
  }

  editClient() {}

  saveClient() {
    if(!this.client.id) {
      console.log('Create Client');
      this.clientService.createClient(this.client).subscribe(response => console.log(response));
    } else {
      console.log('Update Client');
      this.clientService.updateClient(this.client).subscribe(response => console.log(response));
    }
    this.router.navigate(['clients/list']);
  }

}




