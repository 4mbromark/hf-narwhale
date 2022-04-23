import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-progress-bar',
  templateUrl: './standard-progress-bar.component.html',
  styleUrls: ['./standard-progress-bar.component.css']
})
export class StandardProgressBarComponent implements OnInit {
  @Input() show?: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
