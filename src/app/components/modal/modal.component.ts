import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { APP_CONSTANTS } from '@shared/constants';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import {
  MAT_DIALOG_DATA,
  MatDialogModule
} from '@angular/material/dialog';
const MATERIAL_MODULES = [CommonModule,MatInputModule,MatFormFieldModule,MatButtonModule,MatDialogModule,MatSelectModule]
@Component({
  selector: 'app-modal',
  standalone:true,
  imports: [ReactiveFormsModule,MATERIAL_MODULES],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  countries = APP_CONSTANTS.COUNTRIES;


}
