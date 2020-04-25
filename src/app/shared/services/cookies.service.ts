import {Injectable} from '@angular/core';

@Injectable()
export class CookiesService {
  constructor() {
  }

  set(key: string, value: string, path: string): void {
    document.cookie = key + '=' + value + ';path=' + path;
  }

  get(key: string) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      if (name.trim() === key) {
        return cookie.substr(eqPos + 1);

      }
    }
    return null;
  }

  clear() {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
  }

  delete(key: string) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      if (name.trim() === key) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
      }
    }
  }
}
