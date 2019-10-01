import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ROUTES} from './app.routes';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RegistrarProductoComponent } from './components/registrar-producto/registrar-producto.component';
import { MiCuentaComponent } from './components/mi-cuenta/mi-cuenta.component';
import { EditarProductosComponent } from './components/editar-productos/editar-productos.component';
import { MiCarritoComponent } from './components/mi-carrito/mi-carrito.component';
import { MiCatalogoComponent } from './components/mi-catalogo/mi-catalogo.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroPersonaComponent } from './components/registro-persona/registro-persona.component';
import { RegistroDistribuidorComponent } from './components/registro-distribuidor/registro-distribuidor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    RegistrarProductoComponent,
    MiCuentaComponent,
    EditarProductosComponent,
    MiCarritoComponent,
    MiCatalogoComponent,
    LoginComponent,
    RegistroPersonaComponent,
    RegistroDistribuidorComponent
  ],
  imports: [
    BrowserModule,
    //HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    //ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
