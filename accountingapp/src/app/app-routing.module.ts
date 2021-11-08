import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddclientComponent } from './addclient/addclient.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { EditclientComponent } from './editclient/editclient.component';
import { InvoicelistComponent } from './invoicelist/invoicelist.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'clients/list', 
    component: ClientlistComponent
  },
  { path: '',
    pathMatch: 'full',
    redirectTo: 'clients/list'
  }, 
  { path: 'login',
    component: LoginComponent
  }, 
  {
    path: 'clients/new', 
    component: AddclientComponent
  },
  {
    path: 'clients/:id/edit', 
    component: EditclientComponent
  },
  {
    path: 'invoices/list', 
    component: InvoicelistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
