import { InvoicesService } from '../services/invoices.service';
import { Component, OnInit } from '@angular/core';
import { Iinvoicetable } from '../interfaces/iinvoicetable';
import { Iinvoice } from '../interfaces/iinvoice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoicelist',
  templateUrl: './invoicelist.component.html',
  styleUrls: ['./invoicelist.component.css']
})
export class InvoicelistComponent implements OnInit {

  invoices!: Iinvoicetable;
  invoicesForFilter: Iinvoice[]=[];

  constructor(private invoiceService: InvoicesService, private router: Router) { }

  ngOnInit(): void {
    this.invoiceService.getAllInvoices().subscribe(response => this.invoices = response)
  }

  removeInvoice(item: Iinvoice): void {
    this.invoiceService.removeInvoice(item).subscribe(resp => {
      this.invoicesForFilter = this.invoicesForFilter.filter(element => element.id !== item.id);
    });
  }

  editInvoice(item: Iinvoice): void {
    this.router.navigate(['invoices', item.id, 'edit']);
  }

  viewInvoice(item: Iinvoice): void {
    this.router.navigate(['invoices', item.id, 'detail']);
  }

}
