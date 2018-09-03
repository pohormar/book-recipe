import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe book';
  feature = 'recipe';
  onFeatureSelected(feature: string) {
  this.feature = feature;
  }
}
