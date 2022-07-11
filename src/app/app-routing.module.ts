import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path: '', redirectTo:'component-interaction',pathMatch:'full'},
  {path: 'component-interaction', component: Component1Component},
  {path: 'parent-child', component: Component2Component},
  {path: 'parent', component: ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
