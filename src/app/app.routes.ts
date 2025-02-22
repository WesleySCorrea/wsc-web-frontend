import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CarsComponent } from './cars/cars.component';
import { EnterprisesComponent } from './enterprises/enterprises.component';
import { TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'login', pathMatch: 'full', component: LoginComponent },
    { path: 'cars', pathMatch: 'full', component: CarsComponent },
    { path: 'enterprises', pathMatch: 'full', component: EnterprisesComponent },
    { path: 'tasks', pathMatch: 'full', component: TasksComponent },
];
