import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmptyRouteComponent} from "./empty-route/empty-route.component";
import {APP_BASE_HREF} from "@angular/common";
import {OtherMenuComponent} from "./other-menu/other-menu.component";
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
      //{path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logged/home', component: HomeComponent},
     {path: 'othermenu', component: OtherMenuComponent},
    { path: '**', component: HomeComponent },
    // {path: Defines.routeNewUser, component: NewUserComponent},
    // {path: Defines.routeHome, component: HomeComponent, children:[
    //         //todo ver como importar esse modulo a partir de um docker
    //         {path: Defines.routeCadastros, loadChildren: () => import('../../cadastros/src/lib/cadastros.module').then(m => m.CadastrosModule)},
    //         //{path: Defines.routeCadastros, loadChildren: () => import('../../../dist/bjdweb-core/cadastros-src-lib-cadastros-module-es5.js').then(m =>{console.log('carregou'); console.log(m);  /*m.CadastrosModule*/})},
    //         // {path: Defines.routeCadastros, loadChildren:  async () => (await import('../../../../Teste/cadastros-src-lib-cadastros-module-es2015')).CadastrosModule,}
    //     ]
    // },

];

@NgModule({
    imports: [RouterModule.forRoot(routes,/*{enableTracing:true}*/)],
    exports: [RouterModule],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
    ],
})
export class AppRoutingModule { }
