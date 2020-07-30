import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// https://netbasal.com/make-your-angular-directive-functionality-lazy-344a4bd9434b
@Component({
  selector: 'intersection-observer',
  template: `
    <button mat-raised-button (click)="firstExample = !firstExample">Switch example</button>

    <ng-container *ngIf="firstExample">
      <h2>Example 1</h2>
      <mat-list>
        <mat-list-item *ngFor="let item of items" hovering>{{ item.label }}</mat-list-item>
      </mat-list>
    </ng-container>

    <ng-container *ngIf="!firstExample">
      <h2>Example 2</h2>
      <mat-list>
        <mat-list-item *ngFor="let item of items" hovering2>{{ item.label }}</mat-list-item>
      </mat-list>
    </ng-container>
  `,
  styles: [
    `
      :host {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      mat-list {
        display: block;
        height: 600px;
        overflow-y: auto;
      }
    `,
  ],
})
export class IntersectionObserverComponent {
  firstExample = true;

  items = Array.from({ length: 500 }, (_, i) => ({
    id: i,
    label: `Value ${i}`,
  }));

  /*
  Array.from(document.querySelectorAll('mat-list-item'))
           .reduce(function(pre, dom){
               const eventObj = getEventListeners(dom);
               Object.keys(eventObj).forEach(function(evt) {
                   if (!pre[evt]) {
                       pre[evt] = 0;
                   }
                   pre[evt] += eventObj[evt].length;
               });
return pre;
               }, {});
   */
}
