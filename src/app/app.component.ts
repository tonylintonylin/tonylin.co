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
export class AppComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
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

    gsap.from(this.document.querySelector('#sub-1'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#sub-1'),
        toggleActions: 'restart restart restart restart',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      x: -100,
      duration: 0.75,
      opacity: 0.3,
    });

    gsap.from(this.document.querySelector('#sub-2'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#sub-2'),
        toggleActions: 'restart restart restart restart',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      x: -100,
      duration: 0.75,
      opacity: 0.3,
    });

    gsap.from(this.document.querySelector('#head-1'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#head-1'),
        toggleActions: 'play none none none',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      y: 100,
      duration: 0.75,
      opacity: 0.3,
    });

    gsap.from(this.document.querySelector('#head-2'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#head-2'),
        toggleActions: 'play none none none',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      y: 100,
      duration: 0.75,
      opacity: 0.3,
    });

    gsap.from(this.document.querySelector('#head-3'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#head-3'),
        toggleActions: 'play none none none',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      y: 100,
      duration: 0.75,
      opacity: 0.3,
    });

    gsap.from(this.document.querySelector('#head-4'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#head-4'),
        toggleActions: 'play none none none',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      y: 100,
      duration: 0.75,
      opacity: 0.3,
    });
  }
}
