
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegularNotifyRoutingModule } from "./regular-notify-routing.module";
import { RegularNotifyComponent } from "./regular-notify.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";

@NgModule({
    declarations: [
        RegularNotifyComponent
    ],
    imports: [
        CommonModule,
        MDBBootstrapModule,
        RegularNotifyRoutingModule
    ],
    providers: []
})
export class RegularNotifyModule {

}

