import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LectureComponent } from './lectures/lecture/lecture.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LecturesService } from './services/lectures.service';
import { InitService } from './services/base.service';
import { LecturesComponent } from './lectures/lectures.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { LectureSummaryComponent } from './lectures/lecture-summary/lecture-summary.component';
import { ReferencesComponent } from './components/references/references.component';
import { TutorialComponent } from './tutorials/tutorial/tutorial.component';
import { TutorialsService } from './services/tutorials.service';
import { LecturePresentationComponent } from './lectures/lecture-presentation/lecture-presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    LectureComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LecturesComponent,
    TutorialsComponent,
    LectureSummaryComponent,
    ReferencesComponent,
    TutorialComponent,
    LecturePresentationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: providerFactory,
      deps: [ LecturesService ],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: providerFactory,
      deps: [ TutorialsService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Provider factory
export function providerFactory(provider: InitService)
{ return () => provider.init(); }