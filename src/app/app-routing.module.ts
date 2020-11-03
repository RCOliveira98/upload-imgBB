import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './components/home/home.component';
import { ImageCategoriesComponent } from './components/image-categories/image-categories.component';
import { ImageNewComponent } from './components/image-new/image-new.component';
import { ImageSearchComponent } from './components/image-search/image-search.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'images', children: [
        {path: 'new', component: ImageNewComponent},
        {path: 'search', component: ImageSearchComponent},
        {path: 'categories', component: ImageCategoriesComponent}
    ]}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }