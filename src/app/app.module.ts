import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './hero/hero.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TwoColumnComponent } from './two-column/two-column.component';
import { TwoColumn2Component } from './two-column2/two-column2.component';
import { TwoColumn3Component } from './two-column3/two-column3.component';
import { FooterComponent } from './footer/footer.component';
import { HeadingComponent } from './heading/heading.component';
import { CardsComponent } from './cards/cards.component';
import { IconsModule } from './icons/icons.module';
import { TwoColumn4Component } from './two-column4/two-column4.component';
import { TwoColumn5Component } from './two-column5/two-column5.component';
import { HeadingProjectsComponent } from './heading-projects/heading-projects.component';
import { ListComponent } from './list/list.component';
import { FullstackProcessComponent } from './fullstack-process/fullstack-process.component';
import { Heading2Component } from './heading2/heading2.component';
import { FirstLineComponent } from './first-line/first-line.component';
import { FirstWebsiteComponent } from './first-website/first-website.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavBarComponent,
    TwoColumnComponent,
    TwoColumn2Component,
    TwoColumn3Component,
    FooterComponent,
    HeadingComponent,
    CardsComponent,
    TwoColumn4Component,
    TwoColumn5Component,
    HeadingProjectsComponent,
    ListComponent,
    FullstackProcessComponent,
    Heading2Component,
    FirstLineComponent,
    FirstWebsiteComponent,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
