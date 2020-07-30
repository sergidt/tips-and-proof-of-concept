import { Component } from '@angular/core';

@Component({
  selector: 'home-component',
  template: `
    <div class="home-title">Tips & Proof of Concept</div>
    <img src="assets/home.png" />
  `,
  styles: [
    `
      :host {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .home-title {
        margin-top: 100px;
        margin-bottom: 100px;
        font-size: 80px;
        font-family: fantasy;
      }
    `,
  ],
})
export class HomeComponent {}
