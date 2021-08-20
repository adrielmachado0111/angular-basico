/* lo primero es importar el modulo de Ng */
import {NgModule} from "@angular/core";
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[//que cosas contiene este modulo: components, pipes, services
        HeroeComponent,
        ListadoComponent
    ],
    //que cosas quiero que sean visibles afuera de este modulo
    exports: [
        ListadoComponent
    ],
    //aqui adentro van modulos
    imports: [
        CommonModule//ocupa todo lo relacionado cosas de angular por ejemplo: directivas *ngIf
    ]
})
export class HeroesModule{

}