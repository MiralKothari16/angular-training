import { Component, Input } from '@angular/core';
import { ICards } from '../Icards.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() books !: ICards;
}
