import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api/menuitem';
import { APP_NAV_ITEMS } from './app.model';

@Component({
  standalone: true,
  imports: [RouterModule, MenubarModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Navtor';
  items: MenuItem[] = APP_NAV_ITEMS;
}
