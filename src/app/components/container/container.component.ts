import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellService } from 'src/app/services/app-shell.service';
import { filter, map } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @ViewChild('iframeRef', {static: true}) public iframeRef!: ElementRef;

  $iframeUrl = toObservable(this.appShellService.currApp).pipe(
    filter(app => !!app),
    map(app => app!.url)
  );

  constructor(
    private readonly appShellService: AppShellService
  ) {}

  ngOnInit(): void {
    this.$iframeUrl.subscribe(url => {
      this.iframeRef?.nativeElement?.contentWindow?.location?.replace(url);
    })
  }

}
