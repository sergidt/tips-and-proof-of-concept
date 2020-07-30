import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { HoveringDirective } from './intersection-observer/hovering.directive';
import { HoveringDirective2 } from './intersection-observer/hovering.directive2';
import { IntersectionObserverComponent } from './intersection-observer/intersection-observer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HoveringDirective, HoveringDirective2, IntersectionObserverComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MarkdownModule.forRoot(),
    MatToolbarModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
