import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellService } from 'src/app/services/app-shell.service';
import { toObservable } from '@angular/core/rxjs-interop';

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

  constructor(private readonly appShellService: AppShellService) {}

  ngOnInit(): void {
    this.iframeUrl$.subscribe({
      next: (url) => {
        if (!url) {
          console.error('Empty URL');

          return;
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
