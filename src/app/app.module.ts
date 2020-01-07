import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './profile/navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AboutComponent } from './profile/about/about.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { ProjectsComponent } from './profile/projects/projects.component';
import { BlogsComponent } from './profile/blogs/blogs.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    BlogsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
