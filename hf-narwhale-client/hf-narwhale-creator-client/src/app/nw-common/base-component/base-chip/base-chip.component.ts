import { Component, Input, OnDestroy, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { CommissionPriority } from 'src/app/nw-object/commission/commission-priority';

@Component({
  selector: 'app-base-chip',
  templateUrl: './base-chip.component.html',
  styleUrls: ['./base-chip.component.css']
})
export abstract class BaseChipComponent<T, Y> implements OnInit, OnChanges {
  @Input() value: T;
  @Input() size?: 'small' | 'medium' = 'medium';
  @Input() text?: boolean = true;

  public detail: Y;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const detail = this.getDetail(this.value);
    this.detail = detail;
  }

  protected abstract getDetail(value: T): Y;
}
