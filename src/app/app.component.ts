import { Component } from '@angular/core';

export enum ComponentList {
    Home = 'Home'
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent  {
    selectedComponent: ComponentList = ComponentList.Home;
    components: Array<ComponentList> = [];
}
