import { Component } from '@angular/core';
import { PermitService } from './nw-service/permit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hf-narwhale-creator-client';

  public topbarEnabled: boolean;
  public navbarEnabled: boolean;
  public toolbarEnabled: boolean;

  constructor(
    private permitService: PermitService
  ) {
    this.permitService.getTopbarPermit().subscribe((enabled: boolean) => {
      this.topbarEnabled = enabled;
    });
    this.permitService.getNavbarPermit().subscribe((enabled: boolean) => {
      this.navbarEnabled = enabled;
    });
    this.permitService.getToolbarPermit().subscribe((enabled: boolean) => {
      this.toolbarEnabled = enabled;
    });
  }
}
