import { Injectable, EventEmitter } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataArr: Item[] = [];
  changedState: EventEmitter<any> = new EventEmitter<any>();
  LOCAL_STORAGE_KEY: string = 'angular-todos';

  constructor() { 
    this.dataArr = this.getItemFromLocalStorage() ? this.getItemFromLocalStorage() : [];
  }

  getItemFromLocalStorage() {
    return JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY)) as Item[];
  }

  updateLocalStorage() {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.dataArr));
  }

  submit(text: string) {
    this.dataArr = [...this.dataArr, {text, isChecked: false}];
    this.updateLocalStorage();
    this.changedState.emit();
  }

  onChecked(item: Item) {
    this.checked(item);
    this.updateLocalStorage();
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
    this.updateLocalStorage();
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
    this.dataArr = this.dataArr.map((item) => {
      return {...item, isChecked: checked}
    });
    this.updateLocalStorage();
    this.changedState.emit();
  }

  onRemove(item: Item){
    this.remove(item);
    this.updateLocalStorage();
    this.changedState.emit();
  }

  remove(item: Item){
    this.dataArr = this.dataArr.filter((data: Item) => {
      return data !== item;
    });
  }

}
