import { Component, OnInit } from '@angular/core';
import { Iclient } from '../interfaces/iclient';
import { ClientserviceService } from '../services/clientservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {

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
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.id) {
        this.clientService.getClient(params.id).subscribe(response => this.client = response)
      }
    })
  }

  saveClient() {
    if(!this.client.id) {
      console.log('Create Client');
      this.clientService.createClient(this.client).subscribe(response => console.log(response));
    } else {
      console.log('Update User');
      this.clientService.updateClient(this.client).subscribe(response => console.log(response));
    }
    this.router.navigate(['users']);
  }

}




