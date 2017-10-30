import { NgModule } from "@angular/core";
import { CompanyNotifyComponent } from "./company-notify.component";
import { CompanyNotifyRoutingModule } from "./company-notify-routing.module";
import { CommonModule } from "@angular/common";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        CompanyNotifyComponent
    ],
    imports: [
        CommonModule,
        MDBBootstrapModule,
        NgbModule,
        FormsModule,
        CompanyNotifyRoutingModule
    ],
    providers: []
})
export class CompanyNotifyModule { }
