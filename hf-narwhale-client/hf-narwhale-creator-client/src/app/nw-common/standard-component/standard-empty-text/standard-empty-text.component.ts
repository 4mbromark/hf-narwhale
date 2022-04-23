import { Component, Input, OnInit } from '@angular/core';
import { LanguageLabel } from 'src/app/nw-language/language-label';

@Component({
  selector: 'app-standard-empty-text',
  templateUrl: './standard-empty-text.component.html',
  styleUrls: ['./standard-empty-text.component.css']
})
export class StandardEmptyTextComponent implements OnInit {
  @Input() text: LanguageLabel;

  constructor() { }

  ngOnInit(): void {
  }
}
