import { Component } from '@angular/core';

export enum ComponentList {
  Home = 'Home',
  IntersectionObserver = 'Intersection Observer',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ComponentList = ComponentList;
  selectedComponent: ComponentList = ComponentList.Home;
  components: Array<ComponentList> = [ComponentList.IntersectionObserver];
}
