import { Injectable, computed, signal } from '@angular/core';

type App = {
  type: 'inner' | 'outer',
  alias: string,
  title: string,
  url: string
}

const DEFAULT_APP = 'agile-table';

const appsExample: App[] = [
  {
    type: 'inner',
    alias: DEFAULT_APP,
    title: 'Agile Table',
    url: 'http://localhost:4200/app1.html'
  },
  {
    type: 'inner',
    alias: 'am-grid',
    title: 'am.grid',
    url: 'http://localhost:4200/app2.html'
  },
  {
    type: 'outer',
    alias: 'ng-blog',
    title: 'Angular Blog',
    url: 'https://blog.angular.io/'
  },
]

@Injectable({
  providedIn: 'root'
})
export class AppShellService {
  public readonly currAppAlias = signal<string | null>(null);
  public readonly currApp = computed(() => {
    return this.state().apps.find(app => app.alias === this.currAppAlias())
  });

  public readonly state = signal<{loaded: boolean, apps: App[]}>({
    loaded: false,
    apps: []
  })

  constructor() { }

  init() {
    setTimeout(() => {
      this.state.mutate(data => {
        data.apps = appsExample;
        data.loaded = true;
      });

      this.currAppAlias.set(DEFAULT_APP);
    }, 2000);
  }
}
