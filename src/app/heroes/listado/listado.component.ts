import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ["Spiderman", "Ironman", "hulk", "Thor", "Capitan america"];
  heroeBorrado: string = "";
  borrarHeroe = () =>{
    this.heroeBorrado = this.heroes.pop() || "";//puede retornar 2 valores, cuando sea undefined retorne vacio con el operador ||
    console.log(this.heroeBorrado);
  }

}
