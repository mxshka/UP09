import { Component, input } from '@angular/core';

@Component({
  selector: 'app-step',
  imports: [],
  templateUrl: './step.html',
  styleUrl: './step.css',
})
export class Step {

  number = input<string>();
  title = input<string>();
  description = input<string>();
  img = input<string>();
  direction = input<string>("row");
}
