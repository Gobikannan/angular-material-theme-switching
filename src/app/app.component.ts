import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-material-theme-switching';
  constructor(private overlay: OverlayContainer) { }
  toggleTheme(): void {
    if (this.overlay.getContainerElement().classList.contains('dark-theme')) {
      this.overlay.getContainerElement().classList.remove('dark-theme');
      this.overlay.getContainerElement().classList.add('light-theme');
    } else if (this.overlay.getContainerElement().classList.contains('light-theme')) {
      this.overlay.getContainerElement().classList.remove('light-theme');
      this.overlay.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlay.getContainerElement().classList.add('light-theme');
    }
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else if (document.body.classList.contains('light-theme')) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }
  ngOnInit() {
    // document.body.classList.add('light-dark-theme', 'mat-app-background');
    // this.overlay.getContainerElement().classList.add('light-dark-theme');
    this.toggleTheme();
  }
}
