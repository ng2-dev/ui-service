import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import {
  MdSidenav,
  MdDialog,
  MdDialogConfig
} from '@angular/material';

import { SettingsDialogComponent } from './settingsDialog.component';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'lihome',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './leashedInHome.component.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './leashedInHome.component.html'
})
export class LeashedInHomeComponent implements OnInit {

  public dogs = [
    { rows: 2, name: 'Mal', human: 'Jeremy', age: 5},
    { rows: 1, name: 'Molly', human: 'David', age: 5},
    { rows: 1, name: 'Sophie', human: 'Alex', age: 8},
    { rows: 2, name: 'Taz', human: 'Joey', age: '11 weeks'},
    { rows: 1, name: 'Kobe', human: 'Igor', age: 5},
    { rows: 2, name: 'Porter', human: 'Kara', age: 3},
    { rows: 1, name: 'Stephen', human: 'Stephen', age: 8},
    { rows: 1, name: 'Cinny', human: 'Jules', age: 3},
    { rows: 1, name: 'Hermes', human: 'Kara', age: 3}
  ];

  @ViewChild('sidenav') public sidenav: MdSidenav;
  public currentDog = {};
  public isDarkTheme = false;
  constructor( public dialog: MdDialog,
               public vcr: ViewContainerRef) {}
  public ngOnInit() {
    console.log('hello `LeashedInHomeComponent` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public openDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
    this.dialog.open(SettingsDialogComponent, config);
  }
  public showDog(dog) {
    this.currentDog = dog;
    this.sidenav.open();
  }
}
