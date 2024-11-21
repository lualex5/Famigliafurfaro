import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from 
'./pages/inicio/inicio.component';
import { QuienesSomosComponent } from
'./pages/quienes-somos/quienes-somos.component';
import { VinosComponent } from './pages/vinos/vinos.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
export const routes: Routes = [
    {path:'', redirectTo:'inicio', pathMatch: 'full'},
    {path: 'historia', component:HistoriaComponent},
    {path: 'quienes-somos', component: QuienesSomosComponent},
    {path: 'vinos', component:VinosComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'ubicacion', component: UbicacionComponent},
    {path: 'contacto', component: ContactoComponent}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {

 }
