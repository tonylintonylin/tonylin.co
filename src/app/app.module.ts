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
import { CtaComponent } from './cta/cta.component';
import { FooterComponent } from './footer/footer.component';
import { TwoColComponent } from './two-col/two-col.component';
import { HeadingComponent } from './heading/heading.component';
import { CardsComponent } from './cards/cards.component';
import { IconsModule } from './icons/icons.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavBarComponent,
    TwoColumnComponent,
    TwoColumn2Component,
    TwoColumn3Component,
    CtaComponent,
    FooterComponent,
    TwoColComponent,
    HeadingComponent,
    CardsComponent,
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
