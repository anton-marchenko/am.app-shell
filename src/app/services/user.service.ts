import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly users = new Map([
    [1, 'Anton'],
    [2, 'Aram'],
    [3, 'Stas'],
    [4, 'Artem'],
  ]);

  constructor() {}

  public getUserName(id: number) {
    return this.users.get(id);
  }

  public getUsers() {
    return Array.from(this.users).map(([id, name]) => ({
      id,
      name,
    }));
  }
}
