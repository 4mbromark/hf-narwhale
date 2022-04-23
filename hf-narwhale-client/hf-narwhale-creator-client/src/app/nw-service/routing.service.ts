import { StorageService } from './storage.service';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private storage: StorageService
  ) { }

  /* */
  goTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  navigate(url: string[]): void {
    this.router.navigate(url, { relativeTo: this.route });
  }
  navigateBack(): void {
    this.router.navigate(['../']);
  }

  getUrl(): string {
    return this.location.path();
  }

  reload(): void {
    window.location.reload();
  }
}
