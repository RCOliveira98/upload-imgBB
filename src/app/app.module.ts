import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { primeNgModules } from './imports/primeng-modules';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ImageNewComponent } from './components/image-new/image-new.component';
import { ImageSearchComponent } from './components/image-search/image-search.component';
import { ImageCategoriesComponent } from './components/image-categories/image-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ImageNewComponent,
    ImageSearchComponent,
    ImageCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    primeNgModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
