import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


 



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})



export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}





