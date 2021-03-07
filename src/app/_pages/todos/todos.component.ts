import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { Item } from '../../_shared/models/item.model';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Item[] = [
    {
      id: 1,
      label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum enim error excepturi libero nam pariatur quibusdam temporibus! Ab accusamus adipisci deleniti eos excepturi harum necessitatibus nemo officia optio quam, rem.',
      checked: false
    },
    {
      id: 2,
      label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consequuntur dignissimos dolorum esse fuga iure modi molestiae non officiis possimus quam reprehenderit sapiente similique sint tempore ullam velit, voluptatem.',
      checked: false
    }
  ];
  addNewToDo = this.formBuilder.group({
    label: ''
  });
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.addNewToDo);
  }
}
