import { Component, OnInit } from '@angular/core';
import { Iclient } from '../interfaces/iclient';
import { Imunicipalities } from '../interfaces/imunicipalities';
import { Iprovinces } from '../interfaces/iprovinces';
import { ClientserviceService } from '../services/clientservice.service';
import { Iclienttypes } from '../interfaces/iclienttypes';
import { ClientTypeServiceService } from '../services/client-type-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MunicipalityserviceService } from '../services/municipalityservice.service';
import { ProvinceserviceService } from '../services/provinceservice.service';
import { INEWclient } from '../interfaces/i-newclient';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {

  title!: string;
  
  municipalities: any = [];

  provinces: any = [];

  clientTypes: any = [];

  client: Iclient = {
    ragioneSociale: '',
    partitaIva: '',
    tipoCliente: '',
    email: '',
    pec: '',
    telefono: '',
    nomeContatto: '',
    cognomeContatto: '',
    telefonoContatto: '',
    emailContatto: '',
    indirizzoSedeOperativa: {
      id: 0,
      via: '',
      civico: '',
      cap: '',
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
      civico: '',
      cap: '',
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
    dataInserimento: '',
    dataUltimoContatto: '',
    fatturatoAnnuale: '',
    id: 0
  }

  newclient: INEWclient = {
    ragioneSociale: '',
    partitaIva: '',
    tipoCliente: '',
    email: '',
    pec: '',
    telefono: '',
    nomeContatto: '',
    cognomeContatto: '',
    telefonoContatto: '',
    emailContatto: '',
    indirizzoSedeOperativa: {
      via: '',
      civico: '',
      cap: '',
      localita: '',
      comune: {
        id: 1,
        nome: '',
        provincia: {
          id: 1,
          nome: '',
          sigla: '',
        }
      }
    },
    indirizzoSedeLegale: {
      via: '',
      civico: '',
      cap: '',
      localita: '',
      comune: {
        id: 1,
        nome: '',
        provincia: {
          id: 1,
          nome: '',
          sigla: ''
        }
      }
    },
    dataInserimento: '',
    dataUltimoContatto: ''
  }

  constructor(
    private clientService: ClientserviceService,
    private municipalityService: MunicipalityserviceService,
    private provinceService: ProvinceserviceService,
    private clientTypeService: ClientTypeServiceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      /*if(!element.id) {
        this.title = "New Client";
      }
      if(element.id) {
        this.clientService.getClient(element.id).subscribe(response => this.client = response)
      }*/
    })
    this.getMunicipalities();
    this.getProvinces();
    this.getClientTypes()
  }

  getMunicipalities(){
    this.municipalityService.getAllMunicipalities().subscribe(response => 
      this.municipalities = response.content);
  }

  getProvinces(){
    this.provinceService.getAllProvinces().subscribe(response => 
      this.provinces = response.content);
  }

  getClientTypes(){
    this.clientTypeService.getAllTypes().subscribe(response => 
      this.clientTypes = response);
  }

  editClient() {}

  saveClient() {
    if(!this.newclient.dataUltimoContatto) {
      console.log('Create Client');
      console.log(this.newclient.tipoCliente);
      this.clientService.createClient(this.newclient).subscribe(response => console.log(response));
    } else {
      console.log('Update Client');
      this.clientService.updateClient(this.client).subscribe(response => console.log(response));
    }
    this.router.navigate(['clients/list']);
  }

}




