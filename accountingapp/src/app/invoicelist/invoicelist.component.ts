import { InvoicesService } from '../services/invoices.service';
import { Component, OnInit } from '@angular/core';
import { Iinvoicetable } from '../interfaces/iinvoicetable';

@Component({
  selector: 'app-invoicelist',
  templateUrl: './invoicelist.component.html',
  styleUrls: ['./invoicelist.component.css']
})
export class InvoicelistComponent implements OnInit {

  invoices!: Iinvoicetable;

  constructor(private invoiceService: InvoicesService) { }

  ngOnInit(): void {
    this.invoiceService.getAllInvoices().subscribe(response => this.invoices = response)
  }

}
