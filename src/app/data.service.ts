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
    this.dataArr = [...this.dataArr, {text, isChecked: false}];
    this.changedState.emit();
  }

  onChecked(item: Item) {
    this.checked(item);
    this.changedState.emit();
  }

  checked(item: Item) {
    this.dataArr = this.dataArr.map((data) => {
      return data === item ? {...data, isChecked: !data.isChecked} : data;
    });
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
    // this.dataArr.forEach(( item: Item ) => {
    //   item.isChecked = checked;
    // });
    this.dataArr = this.dataArr.map((item) => {
      return {...item, isChecked: checked}
    });
    this.changedState.emit();
  }

  onRemove(item: Item){
    this.remove(item);
    this.changedState.emit();
  }

  remove(item: Item){
    this.dataArr = this.dataArr.filter((data: Item) => {
      return data !== item;
    });
  }

}
