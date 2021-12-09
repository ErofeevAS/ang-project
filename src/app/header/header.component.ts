import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() recipeSelected = new EventEmitter<string>();

  onSelect(recipe: string) {
    this.recipeSelected.emit(recipe);
  }
}