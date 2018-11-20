import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Item } from '../item';

@Component({
  selector: 'todos-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() data;
  @ViewChild('modifyInput') input: ElementRef;
  isDblClicked: boolean = false;
  
  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {

  }

  onChecked(item: Item) {
    this.dataService.onChecked(item);
  }

  onDoubleClick() {
    this.toggleInput();
    this.focusInput();
  }

  toggleInput() {
    this.isDblClicked = !this.isDblClicked;
  }

  // Angular change detection before focus
  focusInput() {
    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 0);
  }

  onRemove(item: Item) {
    this.dataService.onRemove(item);
  }
}
