import { Component, NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FirstComponent } from './first/first.component'
import { SecondComponent } from './second/second.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { ChildaComponent } from './childa/childa.component'
import { ChildbComponent } from './childb/childb.component'
import { finnGuard } from './finn.guard'
import { combineLatest } from 'rxjs'

// The path-match strategy 'full' matches against the entire URL.
// It is important to do this when redirecting empty-path routes. Otherwise,
// because an empty path is a prefix of any URL, the router would apply the redirect
// even when navigating to the redirect destination, creating an endless loop.
const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponent,
    children: [
      { path: 'child-a', component: ChildaComponent },
      { path: 'child-b', component: ChildbComponent }
    ]
  },
  { path: 'second-component', component: SecondComponent },
  // { path: '', redirectTo: '/first-component', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
