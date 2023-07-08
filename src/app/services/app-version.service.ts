import { Injectable, signal } from '@angular/core';

export type AppVersion = 'mobile' | 'desktop';

@Injectable({
  providedIn: 'root',
})
export class AppVersionService {
  public readonly version = signal<AppVersion>(this.getVersion());

  public toggleVersion() {
    const version = this.getVersion();
    const newVersion = version === 'mobile' ? 'desktop' : 'mobile';

    this.switchVersion(newVersion);
    this.version.set(newVersion);
  }

  private getVersion(): AppVersion {
    const version = localStorage.getItem('app-version');

    return version === 'mobile' ? 'mobile' : 'desktop';
  }

  private switchVersion(version: AppVersion) {
    localStorage.setItem('app-version', version);
  }
}
