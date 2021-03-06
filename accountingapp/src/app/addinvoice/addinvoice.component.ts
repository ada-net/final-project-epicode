import { Component, OnInit } from '@angular/core';
import { InvoicesService } from '../services/invoices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Inewinvoice } from '../interfaces/inewinvoice';
import { PaidStatusServiceService } from '../services/paid-status-service.service';
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

  newInvoice: Inewinvoice = {
    data: '',
    numero: 1,
    anno: 1,
    importo: 1,
    stato: {
      id: 1,
      nome: ''
    },
    cliente:
    {
      id: 1
    }
  }

  constructor(
    private invoiceService: InvoicesService,
    private statusService: PaidStatusServiceService,
    private clientService: ClientserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      /* if (!element.id) {
         this.title = "New Invoice";
       }
       if (element.id) {
         this.invoiceService.getInvoice(element.id).subscribe(response => this.invoice = response)
       }*/
    })
    this.getInvoiceStatuses();
    this.getClients();
  }

  getInvoiceStatuses() {
    this.statusService.getAllStatuses().subscribe(response =>
      this.invoiceStatuses = response);
  }

  getClients() {
    this.clientService.getAllClients().subscribe(response => this.clientlist = response)
  }

  saveInvoice() {
    this.invoiceService.createInvoice(this.newInvoice).subscribe(response => this.router.navigate(['invoices/list']));
    
  }

}




