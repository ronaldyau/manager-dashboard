import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationDetailsComponent } from './applications/components/application-details/application-details.component';
import { ApplicationsPageComponent } from './applications/components/applications-page/applications-page.component';
import { BookmarksPageComponent } from './applications/components/bookmarks-page/bookmarks-page.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationsPageComponent,
  },
  {
    path: 'application/:id',
    component: ApplicationDetailsComponent,
  },
  {
    path: 'bookmarks',
    component: BookmarksPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
