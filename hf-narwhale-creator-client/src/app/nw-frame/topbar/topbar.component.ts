import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  @ViewChild('searchTrigger') searchTrigger: MatMenuTrigger;

  myControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
