import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard';
import { ProjectService } from './project.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [HttpClientModule],
  exports: [],
  declarations: [],
  providers: [AuthService, AuthGuard, ProjectService],
})
export class CoreModule { }
