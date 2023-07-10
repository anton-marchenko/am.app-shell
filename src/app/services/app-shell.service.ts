import { Location } from '@angular/common';
import { Injectable, computed, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

type App = {
  disabled?: boolean;
  alias: string;
  title: string;
  description: string;
  url: string;
};

const DEFAULT_APP = 'home';

const appsExample: App[] = [
  {
    alias: DEFAULT_APP,
    title: 'Home',
    description: 'Simple page inside this angular app',
    url: '',
    // disabled: true,
  },
  {
    alias: 'about',
    title: 'About',
    description: 'Simple page inside this angular app',
    url: '',
    // disabled: true,
  },
  {
    alias: 'app1',
    title: 'APP1',
    description: 'Micro-front (embedded by iframe)',
    url: 'http://run.mocky.io/v3/9097d9ab-4b46-4516-965f-ba19d497426a',
  },
  {
    alias: 'app2',
    title: 'APP2',
    description: 'Micro-front (embedded by iframe)',
    url: 'http://run.mocky.io/v3/21c9b000-1631-4f42-8f64-8e727da6320e',
  },
  {
    alias: 'wmf',
    title: 'APP3 (WMF)',
    description: 'Micro-front (embedded by webpack module federation)',
    url: '',
    // disabled: true,
  },
  {
    alias: 'dashboard',
    title: 'Dashboard',
    description: 'Micro-front (embedded by iframe)',
    url: 'http://localhost:49797',
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
      map((e) => e.urlAfterRedirects),
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
  })

  constructor(private readonly router: Router, private location: Location) {}

  public init() {
    // fromEvent<MessageEvent>(this.window, 'message')
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
