import { NgModule } from "@angular/core";
import { NotifyComponent } from "./notify.component";
import { CommonModule } from "@angular/common";
import { NotifyRoutingModule } from "./notify-routing.module";
import { MDBBootstrapModule } from "angular-bootstrap-md";

@NgModule({
    declarations: [
        NotifyComponent
    ],
    imports: [
        CommonModule,
        MDBBootstrapModule,
        NotifyRoutingModule
    ],
    providers: []
})
export class NotifyModule { }
