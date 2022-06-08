import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OsiguranikComponent } from './osiguranik/osiguranik.component';
import { OsiguranjeComponent } from './osiguranje/osiguranje.component';

const routes: Routes = [
  {path : "", component: HomeComponent},
  {path : "osiguranja", component: OsiguranjeComponent},
  {path : "osiguranici", component: OsiguranikComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
