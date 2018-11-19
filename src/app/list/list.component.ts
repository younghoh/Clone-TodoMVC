import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'todos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tabType: string;

  constructor(
    public dataService: DataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.tabType = this.getTabType();
  }

  private getTabType(): string {
    return this.route.snapshot.data.tabType;
  }
}
