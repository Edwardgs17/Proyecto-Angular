import { RouterModule,Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegistrarProductoComponent } from './components/registrar-producto/registrar-producto.component';
import { MiCuentaComponent } from './components/mi-cuenta/mi-cuenta.component';
import { EditarProductosComponent } from './components/editar-productos/editar-productos.component';
import { MiCarritoComponent } from './components/mi-carrito/mi-carrito.component';
import { MiCatalogoComponent } from './components/mi-catalogo/mi-catalogo.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroPersonaComponent } from './components/registro-persona/registro-persona.component';
import { RegistroDistribuidorComponent } from './components/registro-distribuidor/registro-distribuidor.component';


export const ROUTES:Routes=[
    {path:'home', component: HomeComponent},
    {path:'registrar-producto', component: RegistrarProductoComponent},
    {path:'mi-carrito', component: MiCarritoComponent},
    {path:'mi-catalogo', component: MiCatalogoComponent},
    {path:'editar-producto', component: EditarProductosComponent},
    {path:'mi-cuenta', component: MiCuentaComponent},
    {path:'registro-persona', component: RegistroPersonaComponent},
    {path:'registro-distribuidor', component: RegistroDistribuidorComponent},
    {path:'login', component: LoginComponent},
    { path: '**',component: HomeComponent, pathMatch: 'full'},
    {path: '', component: HomeComponent, pathMatch: 'full'}
]