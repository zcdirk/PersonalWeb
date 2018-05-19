import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { WebDemosComponent } from './web-demos/web-demos.component';
import { MyNotesComponent } from './my-notes/my-notes.component';

const appRoutes = [
  { path: 'cv', component: CvComponent },
  { path: 'wd', component: WebDemosComponent },
  { path: 'mn', component: MyNotesComponent },
  { path: '',
    redirectTo: '/cv',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    WebDemosComponent,
    MyNotesComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
