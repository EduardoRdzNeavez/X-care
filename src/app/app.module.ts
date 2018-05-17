import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CompetitionComponent } from './competition/competition.component';
import { VisitComponentComponent } from './visit-component/visit-component.component';
import { PredominantComponent } from './predominant/predominant.component';


@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    VisitComponentComponent,
    PredominantComponent
  ],
  imports: [ RouterModule.forRoot([
    { path: '', component: AppComponent },
        { path: 'competition', component: CompetitionComponent },
        { path: 'Predominant', component: PredominantComponent },
        { path: 'Visit', component: VisitComponentComponent }
  ]),

    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
