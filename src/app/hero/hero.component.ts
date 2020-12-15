import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  bgColor: string;
  isDay: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    if (this.isDay) {
      this.bgColor = '#' + 'ffffff';
      this.isDay = false;
    } else {
      this.bgColor = '#' + '000000';
      this.isDay = true;
    }
  }
}
