import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './components/insert/insert.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'insert', component: InsertComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'details', component: DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
