import { Injectable, computed, signal } from '@angular/core';
import { Router } from '@angular/router';

type App = {
  type: 'inner' | 'wmf';
  alias: string;
  title: string;
  description: string;
  url: string;
};

const DEFAULT_APP = 'home';

const appsExample: App[] = [
  {
    type: 'inner',
    alias: DEFAULT_APP,
    title: 'Home',
    description: 'Simple page inside this angular app',
    url: '',
  },
  {
    type: 'inner',
    alias: 'about',
    title: 'About',
    description: 'Simple page inside this angular app',
    url: '',
  },
  {
    type: 'inner',
    alias: 'app1',
    title: 'APP1',
    description: 'Micro-front (embedded by iframe)',
    url: 'http://run.mocky.io/v3/9097d9ab-4b46-4516-965f-ba19d497426a',
  },
  {
    type: 'inner',
    alias: 'app2',
    title: 'APP2',
    description: 'Micro-front (embedded by iframe)',
    url: 'http://run.mocky.io/v3/21c9b000-1631-4f42-8f64-8e727da6320e',
  },
  {
    type: 'wmf',
    alias: 'wmf',
    title: 'APP3 (WMF)',
    description: 'Micro-front (embedded by webpack module federation)',
    url: '',
  },
  {
    type: 'inner',
    alias: 'dashboard',
    title: 'Dashboard',
    description: 'Micro-front (embedded by iframe)',
    url: 'http://localhost:53263/',
  },
  {
    type: 'inner',
    alias: 'dashboard2',
    title: 'Dashboard2',
    description: 'Micro-front (embedded by iframe)',
    url: 'http://localhost:53263/',
  },
  {
    type: 'outer',
    alias: 'blog',
    title: 'Blog',
    description: 'External link (will be opened in other tab)',
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

  constructor(private readonly router: Router) {}

  public init() {
    // "Back" button in browser
    // history.back();
    window.addEventListener('popstate', () => {
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

        if (msg.type === 'updatePath') {
          const url = '/' + this.currAppAlias() + msg.path;

          this.router.navigateByUrl(url, { replaceUrl: true })
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

  public setCurrAlias(alias: string) {
    this.currAppAlias.set(alias);
  }

  public goToApp(alias: string) {
    this.router.navigate([alias]);
  }
}
