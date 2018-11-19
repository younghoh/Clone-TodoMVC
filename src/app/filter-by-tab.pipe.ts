import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item';

@Pipe({
  name: 'filterByTab'
})
export class FilterByTabPipe implements PipeTransform {

  transform(items: Item[], tabType: string): Item[] {
    switch(tabType) {
      case 'active': 
        return this.checkedItems(items, false);
      case 'completed':
        return this.checkedItems(items, true);
      default:
        return items;
    }
  }

  checkedItems(items: Item[], checked: boolean) {
    return items.filter((item: Item) => {
      return item.isChecked === checked;  
    });
  }

}
