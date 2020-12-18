import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Inject,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate(300)]),
      transition(':leave', [animate(500)]),
    ]),
  ],
})
export class NavBarComponent implements OnInit {
  @Output() toggleSwitched = new EventEmitter<boolean>();

  isDay: boolean = true;
  html: HTMLHtmlElement;
  img: HTMLImageElement;
  features: NodeListOf<Element>;
  webFeatures: NodeListOf<Element>;
  switch: HTMLImageElement;
  iconCSharp: HTMLImageElement;
  iconAngular: HTMLImageElement;
  iconSQL: HTMLImageElement;
  // svgs: HTMLImageElement;

  constructor(@Inject(DOCUMENT) private document) {}

  ngOnInit(): void {
    this.html = document.querySelector('html');
    this.img = document.querySelector('img');
    this.switch = document.querySelector('.wrapper');
    this.iconCSharp = document.querySelector('.icon-cSharp');
    this.iconAngular = document.querySelector('.icon-angular');
    this.iconSQL = document.querySelector('.icon-sql');
    this.features = document.querySelectorAll('.feature');
    this.webFeatures = document.querySelectorAll('.web-feature');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 700) {
      let element = document.getElementById('navbar');
      element.classList.add('sticky');
    } else {
      let element = document.getElementById('navbar');
      element.classList.remove('sticky');
    }
  }

  toggle(): void {
    if (this.isDay) {
      this.isDay = false;
      this.html.style.setProperty('filter', 'invert(1) hue-rotate(180deg)');
      this.img.style.setProperty('filter', 'invert(1) hue-rotate(180deg)');
      this.switch.style.setProperty('filter', 'invert(1) hue-rotate(180deg)');
      this.iconCSharp.style.setProperty(
        'filter',
        'invert(1) hue-rotate(180deg)'
      );
      this.iconSQL.style.setProperty('filter', 'invert(1) hue-rotate(180deg)');
      this.iconAngular.style.setProperty(
        'filter',
        'invert(1) hue-rotate(180deg)'
      );

      [].forEach.call(this.features, function (feature) {
        feature.style.setProperty('filter', 'invert(1) hue-rotate(180deg)');
      });

      [].forEach.call(this.webFeatures, function (webFeature) {
        webFeature.style.setProperty('filter', 'invert(1) hue-rotate(180deg)');
      });
      // [].forEach.call(this.svgs, function (svg) {
      //   svg.style.setProperty('filter', 'invert(1) hue-rotate(180deg)');
      // });
    } else {
      this.isDay = true;
      this.html.style.setProperty('filter', 'none');
      this.img.style.setProperty('filter', 'none');
      this.switch.style.setProperty('filter', 'none');
      this.iconCSharp.style.setProperty('filter', 'none');
      this.iconAngular.style.setProperty('filter', 'none');
      this.iconSQL.style.setProperty('filter', 'none');

      [].forEach.call(this.features, function (feature) {
        feature.style.setProperty('filter', 'none');
      });

      [].forEach.call(this.webFeatures, function (webFeature) {
        webFeature.style.setProperty('filter', 'none');
      });
      // [].forEach.call(this.svgs, function (svg) {
      //   svg.style.setProperty('filter', 'none');
      // });
    }
  }
}
