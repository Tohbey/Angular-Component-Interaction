import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaslGuard } from './auth-guard/masl.guard';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { PublicPageComponent } from './public-page/public-page.component';
import { RestrictedPageComponent } from './restricted-page/restricted-page.component';

const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'public-page', component: PublicPageComponent},
  {path:'restricted-page', component: RestrictedPageComponent, canActivate: [MaslGuard]},
  {path: 'component-interaction', component: Component1Component},
  {path: 'parent-child', component: Component2Component},
  {path: 'parent', component: ParentComponent},
  {path:'**', component: PublicPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
