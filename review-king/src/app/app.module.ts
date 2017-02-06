import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddReviewPagePage } from '../pages/add-review-page/add-review-page';
import { Reviews } from '../providers/reviews';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddReviewPagePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddReviewPagePage
  ],
  providers: [Reviews]
})
export class AppModule {}
