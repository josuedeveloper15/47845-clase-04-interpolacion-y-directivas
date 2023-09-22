import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'clase-04-interpolacion-y-directivas';
  enabled = true;

  valor = 2;

  heroes = ['Spider Man', 'Thor', 'Batman'];

  email = '';

  today = new Date();
  price = 5790.5;

  getBackgroundColor(): object {
    return {
      backgroundColor: this.enabled ? 'green' : 'red',
    };
  }

  alternarEnabled() {
    this.enabled = !this.enabled;
  }
}
