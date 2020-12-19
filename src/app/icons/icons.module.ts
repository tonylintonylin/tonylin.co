import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  Layout,
  Database,
  Server,
  Github,
  Linkedin,
  CornerLeftDown,
  CornerRightDown,
  ChevronsDown,
  Users,
  Code,
  UploadCloud,
  Star,
  GitPullRequest,
  PhoneCall,
} from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Layout,
  Database,
  Server,
  Github,
  Linkedin,
  CornerLeftDown,
  CornerRightDown,
  ChevronsDown,
  Users,
  Code,
  UploadCloud,
  Star,
  GitPullRequest,
  PhoneCall,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
