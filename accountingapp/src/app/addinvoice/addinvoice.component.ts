import { Component, OnInit } from '@angular/core';
import { Iclient } from '../interfaces/iclient';
import { InvoicesService } from '../services/invoices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Inewinvoice } from '../interfaces/inewinvoice';
import { Iinvoice } from '../interfaces/iinvoice';
import { IinvoiceStatus } from '../interfaces/iinvoice-status';
import { IinvoiceStatuses } from '../interfaces/iinvoice-statuses';
import { PaidStatusServiceService } from '../services/paid-status-service.service';
import { Iclienttable } from '../interfaces/iclienttable';
import { ClientserviceService } from '../services/clientservice.service';


@Component({
  selector: 'app-addinvoice',
  templateUrl: './addinvoice.component.html',
  styleUrls: ['./addinvoice.component.css']
})
export class AddinvoiceComponent implements OnInit {

  title!: string;

  invoiceStatuses: any = [];

  clientlist: any = [];

  invoice: Iinvoice = {
    id: 1,
    data: '',
    numero: 1,
    anno: 1,
    importo: 1,
    stato: {
        id: 1,
        nome: '',
    },
    cliente: {
        id: 1,
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
            id: 1,
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
            id: 1,
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
        dataUltimoContatto: '',
        fatturatoAnnuale: 1
    }
  }

  newInvoice: Inewinvoice = {
    id: 1,
    data: '',
    numero: 1,
    anno: 1,
    importo: 1,
    stato: {
      id: 1,
      nome: ''
    }
  }

  constructor(
    private invoiceService: InvoicesService,
    private statusService: PaidStatusServiceService,
    private clientIdService: ClientserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (!element.id) {
        this.title = "New Invoice";
      }
      if (element.id) {
        this.invoiceService.getInvoice(element.id).subscribe(response => this.invoice = response)
      }
    })
    this.getInvoiceStatuses();
    this.getClients();
  }

  getInvoiceStatuses() {
    this.statusService.getAllStatuses().subscribe(response =>
      this.invoiceStatuses = response);
  }

  getClients() {
    this.clientIdService.getAllClients().subscribe(response =>
      this.clientlist = response.content);
  }

  saveInvoice() {
    if (!this.newInvoice.id) {
      console.log('Create Invoice');
      this.invoiceService.createInvoice(this.newInvoice).subscribe(response => console.log(response));
    } else {
      console.log('Update Invoice');
      this.invoiceService.updateInvoice(this.invoice).subscribe(response => console.log(response));
    }
    this.router.navigate(['clients/list']);
  }

}




