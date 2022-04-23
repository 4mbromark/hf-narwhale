import { Component, OnInit } from '@angular/core';
import { LanguageLabel } from 'src/app/nw-language/language-label';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  public ll = LanguageLabel;

  constructor() { }

  ngOnInit(): void {
  }
}
