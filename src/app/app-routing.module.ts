import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LectureComponent } from './lecture/lecture.component';

const routes: Routes = [
  {
    path: '',
    component: LectureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
