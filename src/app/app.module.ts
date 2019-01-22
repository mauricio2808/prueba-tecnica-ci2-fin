import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { TareasListComponent } from './components/tareas-list.component';
import { TareaAddComponent } from './components/tarea-add.component';
import { TareaDetailComponent } from './components/tarea-detail.component';
import { TareaEditComponent } from './components/tarea-edit.component';
import { LoginComponent } from './components/login.component';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    TareasListComponent,
    TareaAddComponent,
    TareaDetailComponent,
    TareaEditComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
   
  ],
  providers: [
    appRoutingProviders, LoginGuard, NoLoginGuard, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
