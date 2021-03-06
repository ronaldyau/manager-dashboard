import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationListComponent } from './applications/components/application-list/application-list.component';
import { ApplicationListItemComponent } from './applications/components/application-list-item/application-list-item.component';
import { ApplicationDetailsComponent } from './applications/components/application-details/application-details.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OptionsFilterComponent } from './applications/components/options-filter/options-filter.component';
import { ApplicationDashboardComponent } from './applications/components/application-dashboard/application-dashboard.component';
import { ApplicationsPageComponent } from './applications/components/applications-page/applications-page.component';
import { BookmarksPageComponent } from './applications/components/bookmarks-page/bookmarks-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationListComponent,
    ApplicationListItemComponent,
    ApplicationDetailsComponent,
    OptionsFilterComponent,
    ApplicationDashboardComponent,
    ApplicationsPageComponent,
    BookmarksPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
