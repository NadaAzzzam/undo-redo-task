import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatForm',

})
export class FormatFormPipe implements PipeTransform {
  transform(value: any, field: string): any {
    if (!value) return value;

    switch (field) {
      case 'name':
        // Capitalize the first letter of each word
        return value.replace(/\b\w/g, (char: string) => char.toUpperCase());

      case 'email':
        // Convert the email to lowercase
        return value.toLowerCase();

      case 'role':
        // Convert the role to uppercase
        return value.toUpperCase();

      default:
        return value;
    }
  }
}
