import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'replacePipe'
})
export class replacePipe implements PipeTransform {

  transform(value: string): string {
    let newVal = value.replace(/\./g, '').toLocaleLowerCase();
    return this.titleCase(newVal);
  }
  titleCase(str: string) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {    
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
}

}