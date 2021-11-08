import { ClientserviceService } from './../services/clientservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit {

  constructor(private clientService: ClientserviceService) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(response => console.log(response))
  }

}
