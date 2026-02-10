import { Component, input } from '@angular/core';
import { Step } from "../step/step";

@Component({
  selector: 'app-how-it-works',
  imports: [Step],
  standalone: true,
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorks {

}
