import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChildaComponent } from './childa/childa.component';
import { ChildbComponent } from './childb/childb.component';
import { finnGuard } from './finn.guard';

const routes: Routes =
[
  {path:'', component: FirstComponent},

  {path:'first-component', component: FirstComponent, canActivate: [finnGuard],

  children: [
    {
      path: 'child-a',
      component: ChildaComponent,
    },
    {
      path: 'child-b',
      component: ChildbComponent,
    },
  ],
  },

  {path:'second-component', component: SecondComponent},
  {path:'**', component: NotFoundComponent}
  // {path:'', component:},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
