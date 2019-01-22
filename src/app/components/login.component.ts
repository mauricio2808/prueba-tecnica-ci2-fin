
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
	selector: 'app-login',
    templateUrl: '../views/login.html',
    
})
export class LoginComponent implements OnInit{
   
constructor(
    private router:Router)
{
    }

    ngOnInit(){
    }
    login(form : NgForm){
        console.log(form.value);

        if (form.value.email === 'admin@admin.com' && form.value.password ==='123456')
        {
            localStorage.setItem('email', form.value.email);
            this.router.navigate(['/tareas']);
        }
    }
}
