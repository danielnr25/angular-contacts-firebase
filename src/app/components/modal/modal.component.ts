import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

const MATERIAL_MODULES = [MatInputModule,MatFormFieldModule]
@Component({
  selector: 'app-modal',
  imports: [MATERIAL_MODULES],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

}
