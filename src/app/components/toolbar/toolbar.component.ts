import { Component, output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

const MATERIAL_MODULES = [MatIconModule,MatButtonModule,MatToolbarModule];

@Component({
  selector: 'app-toolbar',
  imports: [MATERIAL_MODULES],
  template: `
   <mat-toolbar>
      <a mat-button>
        <mat-icon>home</mat-icon>
        <span>Home</span>
      </a>
      <a mat-button>
        <mat-icon>list_all</mat-icon>
        <span>Contactos</span>
      </a>
      <span class="spacer"></span>
      <a mat-button (click)="emitClick()">
        <mat-icon>add_box</mat-icon>
        <span>Nuevo</span>
      </a>
    </mat-toolbar>
  `,
  styles: ``
})

export class ToolbarComponent {
  onNewContactEvent= output<void>();

  emitClick():void {
    this.onNewContactEvent.emit();
  }

}
