import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Item } from '../item';

@Component({
  selector: 'todos-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() data;
  
  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {

  }

  onChecked(item: Item) {
    this.dataService.onChecked(item);
  }

}
