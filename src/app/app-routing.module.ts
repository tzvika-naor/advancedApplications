import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarEditComponent } from './components/cars/car-edit/car-edit.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'car-edit/:id', component: CarEditComponent },
    { path: '**', component: NotFoundComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})

export class AppRoutingModule { }