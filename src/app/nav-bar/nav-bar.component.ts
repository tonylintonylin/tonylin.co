import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Output() toggleSwitched = new EventEmitter<boolean>();

  bgColor: string;
  whiteBlack: string;
  isDay: boolean = true;

  constructor(@Inject(DOCUMENT) private document) {}

  ngOnInit(): void {
    document.documentElement.style.setProperty(
      'filter',
      'invert(1) hue-rotate(180deg)'
    );
  }

  toggle(): void {
    if (this.isDay) {
      this.bgColor = '#ffffff';
      this.whiteBlack = '#000000';
      this.isDay = false;
    } else {
      this.bgColor = '#000000';
      this.whiteBlack = '#ffffff';
      this.isDay = true;
    }
    this.toggleSwitched.emit(this.isDay);
  }
}
