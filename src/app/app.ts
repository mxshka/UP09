import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Companies } from './companies/companies';
import { HowItWorks } from './how-it-works/how-it-works';
import { AiMenu } from './ai-menu/ai-menu';
import { Step } from "./step/step";
import { Reciepes } from './reciepes/reciepes';
import { Reviews } from './reviews/reviews';
import { Price } from './price/price';
import { Form } from './form/form';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, 
    Hero, Companies, HowItWorks, 
    AiMenu, Step, Reciepes, Reviews, 
    Price, Form, Footer],
  templateUrl: 'app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UP');
}
