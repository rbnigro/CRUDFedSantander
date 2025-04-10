import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SantanderListaComponent } from "./pages/santander-lista/santander-lista.component";
import { SantanderFormComponent } from "./pages/santander-form/santander-form.component";

const routes: Routes = [
  { path: 'usuarios', component: SantanderListaComponent },
  { path: 'usuarios/all', component: SantanderListaComponent },
  { path: 'usuarios/consulta/:id', component: SantanderListaComponent },
  { path: 'usuarios/incluir', component: SantanderListaComponent },
  { path: 'usuarios/incluir/lote', component: SantanderListaComponent },
  { path: 'usuarios/delete/:id', component: SantanderFormComponent },
  // { path: 'usuarios/editar/:id', component: SantanderFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
