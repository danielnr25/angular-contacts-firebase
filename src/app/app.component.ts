import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatCardModule} from '@angular/material/card';
import { GridComponent } from './components/grid/grid.component';
import { ModalService } from './components/modal/modal.service';
import { ModalComponent } from './components/modal/modal.component';
const MATERIAL_MODULES = [MatCardModule];
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ToolbarComponent,MATERIAL_MODULES,GridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'Bienvenido a Angular';

  private readonly _modalSvc = inject(ModalService);
  onclickNewContact():void{
    this._modalSvc.openModal(ModalComponent);
  }
}
