import {NgModule} from "@angular/core";
import { ContadorComponent } from './contador/contador.component';
/* aqui guardaremos todo lo referente a contador, bien sea: otros componentes
servicios, pipes, etc. */
@NgModule({
    declarations: [ContadorComponent],//declaramos el componente a utilizar
    exports: [ContadorComponent]//lo exportamos
})
export class ContadorModule{

}