import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.initialAnimations();
  }

  initialAnimations(): void {
    gsap.from(this.document.querySelector('#smallCTA'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#subhead1'),
        toggleActions: 'restart pause resume reset',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      x: 200,
      duration: 0.75,
      opacity: 0.3,
    });
  }
}
