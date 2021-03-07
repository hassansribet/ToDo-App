import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../_shared/models/item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
