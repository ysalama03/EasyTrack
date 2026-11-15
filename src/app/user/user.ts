import { Component, Input, input, Output, output, computed, EventEmitter } from '@angular/core';
import { UserType } from './user.model';
import { Card } from '../shared/card/card';

@Component({
  imports: [Card],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  // old technique for defining inputs and outputs
  //@Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  //@Output() select = new EventEmitter<string>();
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  user = input.required<UserType>();
  selected = input.required<boolean>();
  select = output<string>();

  imagePath = computed(() => 'assets/users/' + this.user().avatar);

  onSelectUser() {
    this.select.emit(this.user().id);
  }

}
