import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  constructor() {}
  selected: any;
  arr = [
    { val: 1, isselected: false, id: 1 },
    { val: 2, isselected: false, id: 2 },
    { val: 3, isselected: false, id: 3 },
    { val: 4, isselected: false, id: 4 },
    { val: 5, isselected: false, id: 5 },
  ];
  setselected(id: number) {
    let selected = this.arr.find((item) => {
      if (item.id == id) {
        item.isselected = true;
        this.selected = item;
      } else {
        item.isselected = false;
      }
    });

    return selected;
  }
}
