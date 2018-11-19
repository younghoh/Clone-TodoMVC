import { Injectable, EventEmitter } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataArr: Item[] = [];
  completedArr: Item[] = [];
  checkedArr: Item[] = [];
  changedState: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  submit(text: string) {
    this.dataArr.push({
      text: text,
      isChecked: false
    });
    this.changedState.emit();
  }

  onChecked(item: Item) {
    this.checked(item);
  }

  checked(item: Item) {
    item.isChecked = !item.isChecked;
    this.changedState.emit();
  }


  getLeftedItems() {
    return this.checkedItems(false);
  }

  onClear(){
    this.clear();
    this.changedState.emit();
  }

  clear(){
    this.dataArr = this.checkedItems(false);
  }

  checkedItems(checked: boolean){
    return this.dataArr.filter(({ isChecked }) => {
      return isChecked === checked;
    });
  }

  allCheck(checked: boolean) {
    this.dataArr.forEach(( item: Item ) => {
      item.isChecked = checked;
    });
    this.changedState.emit();
  }

}