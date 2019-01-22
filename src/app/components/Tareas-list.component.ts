import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TareaService } from '../services/tarea.service';
import { Tarea } from '../models/tarea';

@Component({
	selector: 'tareas-list',
	templateUrl: '../views/tareas-list.html',
	providers: [TareaService]
})
export class TareasListComponent{
	public titulo: string;
	public tareas: Tarea[];
	public confirmado;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _tareaService: TareaService
	){
		this.titulo = 'Listado de tareas';
		this.confirmado = null;
	}

	ngOnInit(){
		console.log('tareas-list.component.ts cargado');
		this.getTareas();
	}

	getTareas(){
		this._tareaService.getTareas().subscribe(
			result => {
				
				if(result.code != 200){
					console.log(result);
				}else{
					this.tareas = result.data;
				}

			},
			error => {
				console.log(<any>error);
			}
		);
	}

	borrarConfirm(id){
		this.confirmado = id;
	}

	cancelarConfirm(){
		this.confirmado = null;
	}

	onDeleteTarea(id){
		this._tareaService.deleteTarea(id).subscribe(
			response => {
				if(response.code == 200){
					this.getTareas();
				}else{
					alert('Error al borrar tarea');
				}
			},	
			error => {
				console.log(<any>error);
			}
		);
	}
}