import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/main/header/header.component';
import { FooterComponent } from './layouts/main/footer/footer.component';
import { LayoutComponent } from './layouts/main/layout/layout.component';
import { HomeComponent } from './main/home/home.component';


const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', component: HomeComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
