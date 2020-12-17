import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Output() toggleSwitched = new EventEmitter<boolean>();

  isDay: boolean = true;
  html: HTMLHtmlElement;
  img: HTMLImageElement;
  feature: HTMLImageElement;
  switch: HTMLImageElement;
  // switchbg: HTMLImageElement;
  // switchInput: HTMLImageElement;
  // toggleSwitch: HTMLImageElement;

  constructor(@Inject(DOCUMENT) private document) {}

  ngOnInit(): void {
    this.html = document.querySelector('html');
    this.img = document.querySelector('img');
    this.feature = document.querySelector('.feature');
    this.switch = document.querySelector('.wrapper');

  }

  toggle(): void {
    if (this.isDay) {
      this.isDay = false;
      this.html.style.setProperty('filter', 'invert(1) hue-rotate(180deg)');
      this.img.style.setProperty('filter', 'invert(1) hue-rotate(180deg)');
      this.feature.style.setProperty('filter', 'invert(1) hue-rotate(180deg)');
      this.switch.style.setProperty('filter', 'invert(1) hue-rotate(180deg)');

    } else {
      this.isDay = true;
      this.html.style.setProperty('filter', 'none');
      this.img.style.setProperty('filter', 'none');
      this.feature.style.setProperty('filter', 'none');
      this.switch.style.setProperty('filter', 'none');

    }
  }
}
