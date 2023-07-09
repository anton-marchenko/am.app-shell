import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { AppShellService } from './services/app-shell.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public readonly isAppsLoaded$ = toObservable(this.appShellService.state).pipe(
    map((state) => state.loaded)
  );

  constructor(private readonly appShellService: AppShellService) {}

  public ngOnInit(): void {
    this.appShellService.init();
  }
}
