import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellService } from 'src/app/services/app-shell.service';
import { map } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent implements OnInit {
  @ViewChild('iframeRef', { static: true }) public iframeRef!: ElementRef;

  public readonly iframeUrl$ = toObservable(this.appShellService.iframeUrl);

  private readonly isAppLoaded$ = toObservable(this.appShellService.state).pipe(
    map((state) => state.loaded)
  );

  constructor(
    private readonly appShellService: AppShellService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isAppLoaded$.subscribe((loaded) => {
      if (loaded) {
        this.activatedRoute.url.subscribe((url) => {
          this.appShellService.setCurrAlias(url[0]?.path);
        });
      }
    });

    this.iframeUrl$.subscribe({
      next: (url) => {
        if (!url) {
          // debugger;
          url = 'http://run.mocky.io/v3/e0e8dfa0-3046-405f-ab6f-24e52b89fc27';
        }
        this.iframeRef?.nativeElement?.contentWindow?.location?.replace(url);
      },
      complete: () => {
        // will be completed automatically after component destruction.
        // probably because derived from signal().
      },
    });
  }
}
