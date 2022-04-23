import { LanguageLabel } from './../../../nw-language/language-label';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-empty',
  templateUrl: './standard-empty.component.html',
  styleUrls: ['./standard-empty.component.css']
})
export class StandardEmptyComponent implements OnInit {
  @Input() text: LanguageLabel;

  constructor() { }

  ngOnInit(): void {
  }
}
