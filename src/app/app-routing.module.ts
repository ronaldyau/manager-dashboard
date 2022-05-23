import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationDetailsComponent } from './applications/components/application-details/application-details.component';

const routes: Routes = [{
  path: 'application/:id',
  component: ApplicationDetailsComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
