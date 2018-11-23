import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'todos-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(
    public dataService: DataService,
  ) { }

  ngOnInit() {
  }

  onSubmit(event: any) {
    if(event.target.value === '') return;
    this.dataService.submit(event.target.value);
    event.target.value = '';
  }

  onAllChecked() {
    // [] array return true
    this.dataService.getLeftedItems().length ? this.dataService.allCheck(true) : this.dataService.allCheck(false);
  }
}
