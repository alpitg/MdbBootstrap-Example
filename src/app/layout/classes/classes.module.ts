import { NgModule } from "@angular/core";
import { ClassesComponent } from "./classes.component";
import { CommonModule } from "@angular/common";
import { ClassesRoutingModule } from "./classes-routing.module";

@NgModule({
    declarations: [
        ClassesComponent
    ],
    imports: [
        CommonModule,
        ClassesRoutingModule
    ],
    providers: []
})
export class ClassesModule { }
