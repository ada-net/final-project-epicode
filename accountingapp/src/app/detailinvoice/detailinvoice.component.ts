import { Component, OnInit } from '@angular/core';
import { InvoicesService } from '../services/invoices.service';
import { Iinvoice } from '../interfaces/iinvoice';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detailinvoice',
  templateUrl: './detailinvoice.component.html',
  styleUrls: ['./detailinvoice.component.css']
})
export class DetailinvoiceComponent implements OnInit {

  detailInvoice!: Iinvoice;

  constructor(private invoiceService: InvoicesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (element.id) {
        this.invoiceService.getInvoice(element.id).subscribe(invoice => this.detailInvoice = invoice);
      }
    });
  }

}
