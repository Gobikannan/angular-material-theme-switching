import { Component, OnInit } from '@angular/core';
import { ThemeDetail } from './theme-detail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedTheme = 'default-theme';
  availableThemes: ThemeDetail[] = [
    { name: 'Default', value: 'default-theme' },
    { name: 'Fancy', value: 'fancy-theme' },
    { name: 'Dark', value: 'dark-theme' }
  ];

  clearAllThemes() {
    this.availableThemes.forEach(theme => {
      if (document.body.classList.contains(theme.value)) {
        document.body.classList.remove(theme.value);
      }
    });
  }

  toggleTheme(): void {
    this.clearAllThemes();
    document.body.classList.add(this.selectedTheme);
  }
  ngOnInit() {
    this.toggleTheme();
  }
}
