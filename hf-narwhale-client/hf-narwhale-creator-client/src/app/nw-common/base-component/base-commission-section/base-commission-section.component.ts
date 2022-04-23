// tslint:disable: no-inferrable-types
// tslint:disable: max-line-length
import { OrderType } from '../../../nw-object/common';
import { BaseCommissionSectionService } from './base-commission-section.service';
import { BaseComponent } from '../base/base.component';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DatabaseObject } from 'src/app/nw-object/nw/database-object';

@Component({
  selector: 'app-base-commission-section',
  templateUrl: './base-commission-section.component.html',
  styleUrls: ['./base-commission-section.component.css']
})
export abstract class BaseCommissionSectionComponent<T extends DatabaseObject> extends BaseComponent implements OnInit, OnChanges, OnDestroy {
  @Input() idCommission: number;

  public dataList: T[] = undefined;
  public loading: boolean = false;

  public order: OrderType = OrderType.DESCENDING;

  public selected: T = null;
  public editing: T = null;

  public orderTypeValues = OrderType;

  constructor(
    protected commissionSectionService: BaseCommissionSectionService<T>
  ) {
    super();
    this.commissionSectionService.getData().subscribe((dataList: T[]) => {
      this.dataList = dataList;
      if (dataList && dataList.length > 0) {
        this.orderData();
      }
    });
    this.commissionSectionService.getLoading().subscribe((loading: boolean) => {
      this.loading = loading;
    });
  }

  ngOnInit(): void {
    // this.loadData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.commissionSectionService.cleanService();
  }

  public loadData(): void {
    this.endEditProcedure();
    this.commissionSectionService.getByIdCommission(this.idCommission);
  }

  public toggleOrder(): void {
    this.order = this.order === OrderType.ASCENDING ? OrderType.DESCENDING : OrderType.ASCENDING;
    this.orderData();
  }

  private orderData(): void {
    this.dataList.sort((a: T, b: T) => {
  /*  if (this.order === OrderType.ASCENDING) { // NOT WORKING
        return a.id > b.id ? 1 : -1;
      } else if (this.order === OrderType.DESCENDING) {
        return a.id < b.id ? 1 : -1;
      } */
      if (this.order === OrderType.ASCENDING) {
        return a.id - b.id;
      } else if (this.order === OrderType.DESCENDING) {
        return b.id - a.id;
      }
    });
  }

  public isOk(): boolean {
    return this.dataList && this.dataList.length > 0;
  }

  public isEmpty(): boolean {
    return !this.loading && this.dataList && this.dataList.length === 0;
  }

  public select(data: T): void {
    this.selected = data;
  }

  public startInsertProcedure(): void {
    const data = this.newDataIstance();
    data.idCommission = this.idCommission;
    this.order === OrderType.ASCENDING ? this.dataList.push(data) : this.dataList.unshift(data);
    this.startEditProcedure(data);
  }

  protected abstract newDataIstance(): T;

  public startEditProcedure(data: T): void {
    if (this.editing) {
      return;
    }
    this.editing = data;
  }

  public endEditProcedure(): void {
    this.editing = null;
  }

  public insert(): void {
    this.commissionSectionService.insert(this.editing).then((data: T) => {
      this.loadData();
      this.endEditProcedure();
    });
  }

  public update(): void {
    this.commissionSectionService.update(this.editing).then((data: T) => {
      this.loadData();
      this.endEditProcedure();
    });
  }

  public undo(): void {
    this.loadData();
    this.endEditProcedure();
  }

  public delete(data: T): void {
    if (data.id) {
      this.commissionSectionService.delete(data.id).then(() => {
        this.remove(data);
        this.loadData();
      });
    } else {
      this.remove(data);
    }
  }

  private remove(data: T): void {
    const index = this.dataList.indexOf(data, 0);
    this.dataList.splice(index, 1);
    this.endEditProcedure();
  }
}
