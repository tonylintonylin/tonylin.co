import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  bgColor: string;
  whiteBlack: string;
  textColor: string;
  isDay: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.textColor = '#808080';
    this.whiteBlack = '#ffffff';
  }

  toggle(): void {
    if (this.isDay) {
      this.bgColor = '#ffffff';
      this.whiteBlack = '#000000';
      this.textColor = '#000000';
      this.isDay = false;
    } else {
      this.bgColor = '#000000';
      this.whiteBlack = '#ffffff';
      this.textColor = '#808080';
      this.isDay = true;
    }
  }
}
