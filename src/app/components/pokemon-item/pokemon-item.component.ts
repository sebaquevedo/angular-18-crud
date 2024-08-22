import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-item',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.css',
})
export class PokemonItemComponent {
  @Input() pokemonInfo!: Pokemon;
}
