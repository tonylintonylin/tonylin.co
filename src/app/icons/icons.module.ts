import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  Layout,
  Database,
  Server,
  Cloud,
  Github,
  Linkedin,
  CornerLeftDown,
  CornerRightDown,
  ChevronsDown
} from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Layout,
  Database,
  Server,
  Cloud,
  Github,
  Linkedin,
  CornerLeftDown,
  CornerRightDown,
  ChevronsDown,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
