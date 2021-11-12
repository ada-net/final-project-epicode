import { Component, OnInit } from '@angular/core';
import { ClientserviceService } from './../services/clientservice.service';
import { Iclient } from '../interfaces/iclient';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detailclient',
  templateUrl: './detailclient.component.html',
  styleUrls: ['./detailclient.component.css']
})
export class DetailclientComponent implements OnInit {

  detailClient!: Iclient;

  constructor(private clientService: ClientserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (element.id) {
        this.clientService.getClient(element.id).subscribe(client => this.detailClient = client);
      }
    });
  }

}

