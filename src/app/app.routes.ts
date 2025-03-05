import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CarsComponent } from './cars/cars.component';
import { EnterprisesComponent } from './enterprises/enterprises.component';
import { TasksComponent } from './tasks/tasks.component';
import { CarDetailsComponent } from './cars/car-details/car-details.component';
import { CarRegisterComponent } from './cars/car-register/car-register.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'login', pathMatch: 'full', component: LoginComponent },
    { path: 'cars', pathMatch: 'full', component: CarsComponent },
    { path: 'cars/register', pathMatch: 'full', component: CarRegisterComponent },
    { path: 'cars/:id', pathMatch: 'full', component: CarDetailsComponent },
    { path: 'enterprises', pathMatch: 'full', component: EnterprisesComponent },
    { path: 'tasks', pathMatch: 'full', component: TasksComponent },
];
