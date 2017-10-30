
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegularNotifyComponent } from "./regular-notify.component";

const routes: Routes = [
    {
        path: '', component: RegularNotifyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RegularNotifyRoutingModule {

}
