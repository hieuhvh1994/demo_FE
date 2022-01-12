import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostingComponent} from './posting/posting/posting.component';

const routes: Routes = [
  {path: '',
  component: PostingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }