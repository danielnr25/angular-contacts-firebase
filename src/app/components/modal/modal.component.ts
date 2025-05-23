import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { APP_CONSTANTS } from '@shared/constants';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA,MatDialogModule } from '@angular/material/dialog';
import { ModalService } from './modal.service';
import { ContactService } from '@features/contacts/contact.service';
import { SnackBarService } from '@shared/service/snack-bar.service';
const MATERIAL_MODULES = [CommonModule,MatInputModule,MatFormFieldModule,MatButtonModule,MatDialogModule,MatSelectModule]
@Component({
  selector: 'app-modal',
  standalone:true,
  imports: [ReactiveFormsModule,MATERIAL_MODULES],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  contactForm!:FormGroup; // me sirve para poder crear mi formulario reactivo
  countries = APP_CONSTANTS.COUNTRIES;

  // VARIABLES PRIVADAS
  private readonly _matDialog = inject(MAT_DIALOG_DATA); // me sirve para recibir los datos del contacto que se va a editar o crear
  private readonly _formbuilder = inject(FormBuilder);
  private readonly _modalSvc   = inject(ModalService);
  private readonly _contactSvc = inject(ContactService);
  private readonly _snackBarSvc = inject(SnackBarService);

  getTitle():string{
    return this._matDialog.data ? 'EDITAR ' : 'REGISTRAR ';
    //return 'Registrar';
  }

  ngOnInit():void {
    console.log('Se inicializo el componente');
    this._buildForm();
    this.contactForm.patchValue(this._matDialog.data); // me sirve para cargar los datos del contacto en el formulario reactivo
  }

  onSubmit(){
    let message = APP_CONSTANTS.MESSAGES.CONTACT_UPDATED;
    const contact = this.contactForm.value;
   
    if(this._matDialog.data){
      const contact_id = this._matDialog.data.id;
      this._contactSvc.updateContact(contact_id,contact);
    }else{ 
      this._contactSvc.newContact(contact);
      message = APP_CONSTANTS.MESSAGES.CONTACT_CREATED;
    }
    this._snackBarSvc.openSnackBar(message,'ok');
    this._modalSvc.closeModal(); // me permite cerrar mi modal
  }

  private _buildForm():void{
    this.contactForm = this._formbuilder.nonNullable.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      country:['',Validators.required]
    })
  }


}
