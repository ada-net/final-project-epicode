import { MyHttpInterceptorInterceptor } from './my-http-interceptor.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { AddclientComponent } from './addclient/addclient.component';
import { FormsModule } from '@angular/forms';
import { EditclientComponent } from './editclient/editclient.component';
import { InvoicelistComponent } from './invoicelist/invoicelist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailclientComponent } from './detailclient/detailclient.component';
import { DetailinvoiceComponent } from './detailinvoice/detailinvoice.component';
import { EditinvoiceComponent } from './editinvoice/editinvoice.component';
import { NewProvinceMunicipalityComponent } from './new-province-municipality/new-province-municipality.component';
import { EditProvinceMunicipalityComponent } from './edit-province-municipality/edit-province-municipality.component';
import { ListProvincesMunicipalitiesComponent } from './list-provinces-municipalities/list-provinces-municipalities.component';
import { AddinvoiceComponent } from './addinvoice/addinvoice.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ClientlistComponent,
    AddclientComponent,
    EditclientComponent,
    InvoicelistComponent,
    DetailclientComponent,
    DetailinvoiceComponent,
    EditinvoiceComponent,
    NewProvinceMunicipalityComponent,
    EditProvinceMunicipalityComponent,
    ListProvincesMunicipalitiesComponent,
    AddinvoiceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
