import { inject, Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { Contact } from '../../features/contacts/contact.interface';
@Injectable({
  providedIn: 'root'
})

export class ModalService {

  private readonly dialog = inject(MatDialog);
  constructor() { }

  openModal<CT,T=Contact>(componenRef:ComponentType<CT>,data?:T,isEditing=false):void{
    const config = {data,isEditing}
    this.dialog.open(componenRef,{width:'400px',data:config})
  }

  closeModal():void{
    this.dialog.closeAll();
  }

}
