import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from './hero/hero.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(HeroComponent) hero: HeroComponent;

  bgColor: string;
  isDay: boolean = true;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.initialAnimations();
  }

  initialAnimations(): void {
    gsap.from(this.document.querySelector('#col-1-1'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#col-1-1'),
        toggleActions: 'restart restart restart restart',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      x: -150,
      duration: 0.75,
      opacity: 0.3,
    });
    gsap.from(this.document.querySelector('#col-1-2'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#col-1-2'),
        toggleActions: 'restart restart restart restart',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      x: -150,
      duration: 0.75,
      opacity: 0.3,
    });
    gsap.from(this.document.querySelector('#col-1-3'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#col-1-3'),
        toggleActions: 'restart restart restart restart',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      x: -150,
      duration: 0.75,
      opacity: 0.3,
    });

    gsap.from(this.document.querySelector('#inspired'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#inspired'),
        toggleActions: 'restart restart restart restart',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      x: -100,
      duration: 0.75,
      opacity: 0.3,
    });

    gsap.from(this.document.querySelector('#smallCTA'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#smallCTA'),
        toggleActions: 'restart restart restart restart',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      x: -100,
      duration: 0.75,
      opacity: 0.3,
    });
  }

  OnToggled(isDay: boolean) {
    this.hero.toggle();
  }
}
