import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellService } from 'src/app/services/app-shell.service';

@Component({
  selector: 'app-toolbar-desktop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toolbar-desktop.component.html',
  styleUrls: ['./toolbar-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarDesktopComponent {
  public get navItems() {
    return this.appShellService.navItems;
  }

  constructor(private readonly appShellService: AppShellService) {}

  public goToApp(alias: string) {
    this.appShellService.goToApp(alias);
  }
}
