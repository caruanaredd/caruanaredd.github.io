import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LecturePresentationComponent } from './lectures/lecture-presentation/lecture-presentation.component';
import { LectureSummaryComponent } from './lectures/lecture-summary/lecture-summary.component';
import { LectureComponent } from './lectures/lecture/lecture.component';
import { LecturesComponent } from './lectures/lectures.component';
import { TutorialComponent } from './tutorials/tutorial/tutorial.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lectures',
    children: [
      {
        path: '',
        component: LecturesComponent
      },
      {
        path: ':slug',
        component: LectureComponent,
        children: [
          {
            path: '',
            component: LectureSummaryComponent
          },
          {
            path: 'view',
            component: LecturePresentationComponent
          }
        ]
      }
    ]
  },
  {
    path: 'tutorials',
    children: [
      {
        path: '',
        component: TutorialsComponent
      },
      {
        path: 'view/:slug',
        component: TutorialComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
