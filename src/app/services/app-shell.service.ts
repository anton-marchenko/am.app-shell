import { Injectable, computed, signal } from '@angular/core';
import { Router } from '@angular/router';

type App = {
  type: 'inner' | 'wmf' | 'outer';
  alias: string;
  title: string;
  url: string;
};

const DEFAULT_APP = 'app1';

const appsExample: App[] = [
  {
    type: 'wmf',
    alias: 'testo',
    title: 'TESTO',
    url: '',
  },
  {
    type: 'inner',
    alias: DEFAULT_APP,
    title: 'APP_1',
    url: 'http://localhost:53263/',
  },
  {
    type: 'inner',
    alias: 'app2',
    title: 'APP_2',
    url: 'http://localhost:54035/',
  },
  {
    type: 'outer',
    alias: 'app3',
    title: 'Angular Blog',
    url: 'https://blog.angular.io/',
  },
];

@Injectable({
  providedIn: 'root',
})
export class AppShellService {
  public readonly currAppAlias = signal<string | null>(null);
  public readonly currApp = computed(() => {
    return this.state().apps.find((app) => app.alias === this.currAppAlias());
  });

  public readonly state = signal<{ loaded: boolean; apps: App[] }>({
    loaded: false,
    apps: [],
  });

  constructor(private readonly router: Router) {}

  public init() {
    // "Back" button in browser
    // history.back();
    window.addEventListener("popstate", (event) => {
      const alias = this.getCurrAppAliasByURL(window.location.pathname);

      this.currAppAlias.set(alias);
    });

    window.addEventListener(
      'message',
      (msgEvent) => {
        const msg = msgEvent.data;

        if (msg.type === 'goToApp') {
          this.goToApp(msg.alias);
        }
      },
      false
    );

    setTimeout(() => {
      this.state.mutate((data) => {
        data.apps = appsExample;
        data.loaded = true;
      });

      const currUrl = this.router.url;
      const currAppAlias = this.getCurrAppAliasByURL(currUrl);

      this.currAppAlias.set(currAppAlias);
    }, 1000);
  }

  public goToApp(alias: string) {
    const app = this.state().apps.find((app) => app.alias === alias);

    if (app?.type === 'outer') {
      window.open(app.url, '_blank');

      return;
    }

    this.currAppAlias.set(alias);

    this.router.navigate([alias]);
  }

  /**
   *
   * @param path example: "/app1"
   */
  private getCurrAppAliasByURL(path: string) {
    const regex = /^\/([a-zA-Z0-9\-\_])+/;

    // Find app alias. Example:
    // "/app1?x=y" => "app1"
    const alias = path.match(regex)?.[0]?.replace('/', '');

    const currApp = this.state().apps.find((app) => app.alias === alias);

    return currApp?.alias ?? null;
  }
}
