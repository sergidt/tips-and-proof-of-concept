import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'intersection-observer',
  template: `
    <mat-list>
      <mat-list-item *ngFor="let item of items" hovering>{{ item.label }}</mat-list-item>
    </mat-list>
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
