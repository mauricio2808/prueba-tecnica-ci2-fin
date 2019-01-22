import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'

// Componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { TareasListComponent } from './components/tareas-list.component';
import { TareaAddComponent } from './components/tarea-add.component';
import { TareaDetailComponent } from './components/tarea-detail.component';
import { TareaEditComponent } from './components/tarea-edit.component';
import { LoginComponent } from './components/login.component';

const appRoutes: Routes = [
	
	{path: 'login', component: LoginComponent},
	{path: 'home', component: HomeComponent},   
	{path: 'login', component: LoginComponent},
	{path: 'tareas', component: TareasListComponent},   
	{path: 'crear-tarea', component: TareaAddComponent}, 
	{path: 'tarea/:id', component: TareaDetailComponent},
	{path: 'editar-tarea/:id', component: TareaEditComponent},
	{path: '**', component: ErrorComponent} 
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);