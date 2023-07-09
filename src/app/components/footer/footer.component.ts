import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppVersionService } from 'src/app/services/app-version.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  public readonly currentVersion = this.appVersionService.version;

  constructor(private readonly appVersionService: AppVersionService) {}

  public toggleVersion() {
    this.appVersionService.toggleVersion();
  }
}
