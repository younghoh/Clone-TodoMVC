import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'todos-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {
  tabs: string[] = [
    'All',
    'Active',
    'Completed',
  ];
  leftedItemsCount: number = 0;
  isExistCompleted: boolean = false;
  activatedTab: string = 'All';

  constructor(
    public dataService: DataService,
  ) { }

  ngOnInit() {
    this.refreshState(); // initialize
    this.dataService.changedState.subscribe(() => {
      this.refreshState();
    })
  }

  refreshState() {
    const leftedItems = this.dataService.getLeftedItems();
    this.leftedItemsCount = leftedItems.length;
    this.isExistCompleted = leftedItems.length !== this.dataService.dataArr.length;
  }

  onClear() {
    this.dataService.onClear();
  }

  onSelectTab(tabName: string) {
    if( tabName === this.activatedTab ) return;
    this.activatedTab = tabName;
  }
}
