import { LayoutComponent } from "./layout.component";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { StudentComponent } from './student/student.component';
import { ClassesComponent } from './classes/classes.component';
import { CommonModule } from "@angular/common";
import { LayoutRoutingModule } from "./layout-routing.module";
import { HeaderComponent } from "../shared/headers/header/header.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { NotifyComponent } from './notify/notify.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        MDBBootstrapModule.forRoot(),
        LayoutRoutingModule
    ],
    schemas: [NO_ERRORS_SCHEMA], //Imp to display 
    providers: []
})
export class LayoutModule { }
