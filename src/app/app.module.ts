import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MirrorsComponent} from './components/mirrors/mirrors.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { IndividualComponent } from './components/individual/individual.component';
import { HeaderComponent } from './components/header/header.component';

const appRoutes: Routes = [
  {path: '', component: MirrorsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'individual', component: IndividualComponent},
  {path: 'contacts', component: ContactsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MirrorsComponent,
    AboutComponent,
    ContactsComponent,
    IndividualComponent,
    HeaderComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
