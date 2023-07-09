import {
  Component,
  ViewChild,
  ViewContainerRef,
  ChangeDetectionStrategy,
  AfterViewInit,
  Injector,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AppVersion,
  AppVersionService,
} from 'src/app/services/app-version.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements AfterViewInit {
  @ViewChild('toolbarContainer', { read: ViewContainerRef })
  toolbarContainer!: ViewContainerRef;

  constructor(
    private readonly injector: Injector,
    private readonly appVersionService: AppVersionService
  ) {}

  public ngAfterViewInit(): void {
    effect(
      () => {
        const version = this.appVersionService.version();

        this.loadComponent(version).then();
      },
      {
        injector: this.injector,
      }
    );
  }

  /**
   * @link https://dev.to/debug_mode/how-to-lazy-and-dynamically-load-a-component-in-angular-18ke
   */
  private async loadComponent(version: AppVersion) {
    this.toolbarContainer.clear();

    if (version === 'desktop') {
      const { ToolbarDesktopComponent } = await import(
        './toolbar-desktop/toolbar-desktop.component'
      );

      this.toolbarContainer.createComponent(ToolbarDesktopComponent);

      return;
    }

    const { ToolbarMobileComponent } = await import(
      './toolbar-mobile/toolbar-mobile.component'
    );

    this.toolbarContainer.createComponent(ToolbarMobileComponent);
  }
}
