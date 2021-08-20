/* buenas practicas es llamar al componente: nombre-componente.component.ts */
/* lo primero que hacemos es crear una clase, luego le colocamos el decorador */
import {Component} from '@angular/core';

//colocamos el decorador, con su respectivo selector y template
@Component({
    selector: "app-contador",
    template: `
    <h1>{{titulo}}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>
    <button (click)="acumulador(base)">+ {{base}}</button>
    <span> {{numero}} </span>
    <button (click)="acumulador(-base)">- {{base}}</button>
    `
})
export class ContadorComponent {
    /* propiedades */
    titulo: string = 'Contador APP';
    numero: number = 1000;
    base: number = 100;
    /* metodos */
    acumulador = (valor: number) => {
        this.numero += valor;
    }
}