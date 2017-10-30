
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotifyComponent } from "./notify.component";


const routes: Routes = [
    {
        path: '', component: NotifyComponent,
        children: [
            {
                path: '', redirectTo: 'regular-notify'
            },
            {
                path: 'regular-notify', loadChildren: './regular-notify/regular-notify.module#RegularNotifyModule'
            },
            {
                path: 'company-notify', loadChildren: './company-notify/company-notify.module#CompanyNotifyModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NotifyRoutingModule {

}