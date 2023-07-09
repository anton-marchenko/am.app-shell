import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellService } from 'src/app/services/app-shell.service';

@Component({
  selector: 'app-toolbar-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toolbar-mobile.component.html',
  styleUrls: ['./toolbar-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarMobileComponent {
  public opened: boolean = false;

  public get navItems() {
    return this.appShellService.navItems;
  }

  constructor(private readonly appShellService: AppShellService) {}

  public goToApp(alias: string) {
    this.opened = false;

    this.appShellService.goToApp(alias);
  }

  public toggleMenu() {
    this.opened = !this.opened
  }
}
