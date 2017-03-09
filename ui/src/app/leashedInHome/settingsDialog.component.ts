import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import {
  MdSidenav,
  MdDialog,
  MdDialogConfig } from '@angular/material';

@Component({
  selector: 'settings-dialog',
  template: `
    <label>Would you like dog pics every min ???</label>
    <md-slide-toggle></md-slide-toggle>
  `

})
export class SettingsDialogComponent {
}
