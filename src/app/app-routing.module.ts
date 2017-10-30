
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule'
        // canActivate: [AuthGuard]
    },
    // { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'not-found', loadChildren: './shared/not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}