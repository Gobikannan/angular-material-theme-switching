import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringFormatService {
  stringFormat(str: string, args: string[]): string {
      if (!args) {
          return str;
      }
      return str.replace(/{(\d+)}/g, (match, index) => args[index] || '');
  }
}
