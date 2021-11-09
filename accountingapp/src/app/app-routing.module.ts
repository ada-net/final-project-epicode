import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddclientComponent } from './addclient/addclient.component';
import { AppComponent } from './app.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { EditclientComponent } from './editclient/editclient.component';
import { FooterComponent } from './footer/footer.component';
import { InvoicelistComponent } from './invoicelist/invoicelist.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailclientComponent } from './detailclient/detailclient.component';
import { DetailinvoiceComponent } from './detailinvoice/detailinvoice.component';

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
    path: 'clients/:id/detail', 
    component: DetailclientComponent
  },
  {
    path: 'invoices/list', 
    component: InvoicelistComponent
  },
  {
    path: 'invoices/list:id/detail', 
    component: DetailinvoiceComponent
  }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
