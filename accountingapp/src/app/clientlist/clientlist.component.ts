import { ClientserviceService } from './../services/clientservice.service';
import { Component, OnInit } from '@angular/core';
import { Iclienttable } from '../interfaces/iclienttable';


@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit {

  clients!: Iclienttable;


  constructor(private clientService: ClientserviceService) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(response => this.clients = response)
    
  }

}
