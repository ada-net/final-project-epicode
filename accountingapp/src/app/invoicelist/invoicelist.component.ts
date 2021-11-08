import { InvoicesService } from '../services/invoices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoicelist',
  templateUrl: './invoicelist.component.html',
  styleUrls: ['./invoicelist.component.css']
})
export class InvoicelistComponent implements OnInit {

  constructor(private invoiceService: InvoicesService) { }

  ngOnInit(): void {
    this.invoiceService.getAllInvoices().subscribe(response => console.log(response))
  }

}
