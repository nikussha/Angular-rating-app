import { ResponseService } from './../response.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss'],
})
export class ResponseComponent implements OnInit {
  btns;

  constructor(public serv: ResponseService) {
    this.btns = this.serv.arr;
  }
  setselected(id: number) {
    this.serv.setselected(id);
  }
  ngOnInit(): void {}
}
