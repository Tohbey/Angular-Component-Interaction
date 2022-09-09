import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path: 'component-interaction', component: Component1Component},
  {path: 'parent-child', component: Component2Component},
  {path: 'parent', component: ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
