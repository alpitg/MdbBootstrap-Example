
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompanyNotifyComponent } from "./company-notify.component";

const routes: Routes = [
    {
        path: '', component: CompanyNotifyComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CompanyNotifyRoutingModule {

}