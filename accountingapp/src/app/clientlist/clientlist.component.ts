import { ClientserviceService } from './../services/clientservice.service';
import { Component, OnInit } from '@angular/core';
import { Iclienttable } from '../interfaces/iclienttable';
import { Iclient } from '../interfaces/iclient';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})


export class ClientlistComponent implements OnInit {

  clients!: Iclienttable;
  clientsForFilter: Iclient[] = [];
  constructor(private clientService: ClientserviceService, private router: Router) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(response => this.clients = response)
  }

  removeClient(item: Iclient): void {
    this.clientService.removeClient(item).subscribe(resp => {
      this.clientsForFilter = this.clientsForFilter.filter(element => element.id !== item.id);
    });
  }

  editClient(item: Iclient): void {
    this.router.navigate(['clients', item.id, 'edit']);
  }

  viewClient(item: Iclient): void {
    this.router.navigate(['clients', item.id, 'detail']);
  }

}
