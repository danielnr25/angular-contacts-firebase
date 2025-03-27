import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatCardModule} from '@angular/material/card';
import { GridComponent } from './components/grid/grid.component';
const MATERIAL_MODULES = [MatCardModule];
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ToolbarComponent,MATERIAL_MODULES,GridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'Bienvenido a Angular';

  onclickNewContact():void{
    console.log('Desde app component')
  }
}
