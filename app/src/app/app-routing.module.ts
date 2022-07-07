import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  {path: 'home', component: DummyComponent},
  {path: 'about', component: DummyComponent},
  {path: 'contacts', component: DummyComponent},
  {path: 'gallery', component: DummyComponent},
  {path: 'signup', component: DummyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
