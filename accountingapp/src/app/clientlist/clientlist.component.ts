import { ClientserviceService } from './../services/clientservice.service';
import { Component, OnInit } from '@angular/core';
import { Iclienttable } from '../interfaces/iclienttable';


@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit {

  clients!:Iclienttable;


  constructor(private ClientService: ClientserviceService) { }

  ngOnInit(): void {
    this.ClientService.getAllClients().subscribe(response => this.clients = response)
    
  }

}
