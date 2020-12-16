import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

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
