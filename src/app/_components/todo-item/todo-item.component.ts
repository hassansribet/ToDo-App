import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../_shared/models/item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit(): void {
  }

  editItem(item: Item): void {
    console.log('edit: ', item);
  }

  deleteItem(item: Item): void {
    if (window.confirm('Are you sure ?')) {
      console.log('delete: ', item);
    }
  }
}
