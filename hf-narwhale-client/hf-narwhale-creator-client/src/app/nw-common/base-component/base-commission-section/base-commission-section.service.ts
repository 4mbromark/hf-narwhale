import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { NarwhaleCSApi } from '../../../nw-object/url/url';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseObject } from 'src/app/nw-object/nw/database-object';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseCommissionSectionService<T extends DatabaseObject> {

  protected abstract getUrl: NarwhaleCSApi;
  protected abstract insertUrl: NarwhaleCSApi;
  protected abstract updateUrl: NarwhaleCSApi;
  protected abstract deleteUrl: NarwhaleCSApi;

  protected dataList: ReplaySubject<T[]> = new ReplaySubject<T[]>();

  protected loading: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor(
    protected http: HttpClient
  ) { }

  public getData(): Observable<T[]> {
    return this.dataList.asObservable();
  }

  public getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  public cleanService(): void {
    this.dataList.next(null);
    this.loading.next(false);
  }

  public getByIdCommission(idCommission: number): Promise<T[]> {
    this.loading.next(true);
    return new Promise((resolve, reject) => {
      this.http.get(this.getUrl + idCommission, { responseType: 'json' }).subscribe(
        (dataList: T[]) => {
          this.dataList.next(dataList);
          this.loading.next(false);
          resolve(dataList);
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }

  public insert(data: T): Promise<T> {
    this.loading.next(true);
    return new Promise((resolve, reject) => {
      this.http.put(this.insertUrl + data.idCommission, this.buildDataToInsert(data), { responseType: 'json' }).subscribe(
        (insertedData: T) => {
          resolve(insertedData);
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }

  protected abstract buildDataToInsert(data: T): any;

  public update(data: T): Promise<T> {
    this.loading.next(true);
    return new Promise((resolve, reject) => {
      this.http.put(this.updateUrl + data.id, this.buildDataToUpdate(data), { responseType: 'json' }).subscribe(
        (updatedData: T) => {
          resolve(updatedData);
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }

  protected abstract buildDataToUpdate(data: T): any;

  public delete(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.delete(this.deleteUrl + id, { responseType: 'json' }).subscribe(
        () => {
          resolve();
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }
}
