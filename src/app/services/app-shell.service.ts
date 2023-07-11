import { Location } from '@angular/common';
import { Injectable, computed, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { environment } from './../../environments/environment';

type App = {
  disabled?: boolean;
  alias: string;
  title: string;
  description: string;
  /** URL for hosting iframe */
  url?: string;
};

const urls = new Map<string, { prod: string; dev: string }>([
  [
    'app1',
    {
      prod: 'https://run.mocky.io/v3/9097d9ab-4b46-4516-965f-ba19d497426a',
      dev: 'http://run.mocky.io/v3/9097d9ab-4b46-4516-965f-ba19d497426a',
    },
  ],
  [
    'app2',
    {
      prod: 'https://run.mocky.io/v3/21c9b000-1631-4f42-8f64-8e727da6320e',
      dev: 'http://run.mocky.io/v3/21c9b000-1631-4f42-8f64-8e727da6320e',
    },
  ],
  [
    'app4',
    {
      prod: 'https://anton-marchenko.github.io/am.app-shell-frame-app/',
      dev: 'http://localhost:4202/',
    },
  ],
]);

function resolveUrl(alias: string) {
  if (environment.production) {
    return urls.get(alias)?.prod;
  }

  return urls.get(alias)?.dev;
}

const appsExample: App[] = [
  {
    alias: 'home',
    title: 'Home',
    description: 'Simple page inside this angular app',
  },
  {
    alias: 'about',
    title: 'About',
    description: 'Simple page inside this angular app',
  },
  {
    alias: 'app1',
    title: 'APP1',
    description: 'Micro-front (embedded by iframe)',
    url: resolveUrl('app1'),
  },
  {
    alias: 'app2',
    title: 'APP2',
    description: 'Micro-front (embedded by iframe)',
    url: resolveUrl('app2'),
  },
  {
    alias: 'wmf',
    title: 'APP3 (WMF)',
    description: 'Micro-front (embedded by webpack module federation)',
  },
  {
    alias: 'app4',
    title: 'APP4',
    description: 'Micro-front (embedded by iframe)',
    url: resolveUrl('app4'),
    // disabled: true,
  },
];

@Injectable({
  providedIn: 'root',
})
export class AppShellService {
  public readonly currApp = computed(() => {
    return this.state().apps.find((app) => app.alias === this.currAppAlias());
  });
  public readonly iframeUrl = computed(() => {
    const url = this.currApp()?.url;
    const alias = this.currApp()?.alias;
    const locationPath = this.location.path();
    const ctx = locationPath.replace(new RegExp('^/' + alias), '');

    /**
     * @example
     *
     * location.href = "http://app.shell.example.com/app1/ctx?a=b"
     * location.path = "app1/ctx?a=b"
     * currApp.alias = "app1"
     * currApp.url = "http://iframe.example.com"
     * ctx = "/ctx?a=b"
     * iframeUrl = "http://iframe.example.com/ctx?a=b"
     */
    return url + ctx;
  });
  public readonly navItems = computed(() => {
    const currAppAlias = this.currAppAlias();

    return this.state().apps.map((app) => ({
      title: app.title,
      alias: app.alias,
      description: app.description,
      active: app.alias === currAppAlias,
    }));
  });

  public readonly state = signal<{ loaded: boolean; apps: App[] }>({
    loaded: false,
    apps: [],
  });

  private readonly navEvent = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects)
    )
  );

  public readonly currAppAlias = computed(() => {
    const state = this.state();

    if (!state.loaded) {
      return null;
    }

    const path = this.navEvent();

    if (!path) {
      return null;
    }

    const regex = /^\/([a-zA-Z0-9\-\_])+/;

    // Find app alias. Example:
    // "/app1?x=y" => "app1"
    const alias = path.match(regex)?.[0]?.replace('/', '');

    const currApp = state.apps.find((app) => app.alias === alias);

    return currApp?.alias ?? null;
  });

  constructor(private readonly router: Router, private location: Location) {}

  public init() {
    // TODO fromEvent<MessageEvent>(this.window, 'message')
    window.addEventListener(
      'message',
      (msgEvent) => {
        const msg = msgEvent.data;

        if (msg.type === 'goToApp') {
          this.goToApp(msg.alias);
        }

        if (msg.type === 'updatePath') {
          const url = '/' + this.currAppAlias() + msg.path;

          this.router.navigateByUrl(url, { replaceUrl: true });
        }
      },
      false
    );

    setTimeout(() => {
      this.state.mutate((data) => {
        data.apps = appsExample.filter((app) => !app.disabled);
        data.loaded = true;
      });
    }, 1000);
  }

  public goToApp(alias: string) {
    this.router.navigate([alias]);
  }
}
