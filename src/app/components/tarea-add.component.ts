import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TareaService } from '../services/tarea.service';
import { Tarea } from '../models/tarea';

@Component({
	selector: 'tarea-add',
	templateUrl: '../views/tarea-add.html',
	providers: [TareaService]
})
export class TareaAddComponent{
	public titulo: string;
	public tarea: Tarea;
	
	constructor(
		private _tareaService: TareaService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.titulo = 'Crear una nueva tarea';
		this.tarea = new Tarea('','','','','');
	}

	ngOnInit(){
		console.log('tarea-add.component.ts cargado...');
	}

	saveTarea(){
			this._tareaService.addTarea(this.tarea).subscribe(
				response => {
					if(response.code == 200){
						this._router.navigate(['/tareas']);
					}else{
						console.log(response);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
	}
}