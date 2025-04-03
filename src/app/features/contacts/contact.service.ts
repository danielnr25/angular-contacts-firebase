import { Injectable, inject } from "@angular/core";
import { Firestore, collection, addDoc, DocumentReference, DocumentData, query, orderBy, collectionData  } from "@angular/fire/firestore";
import { APP_CONSTANTS } from "@shared/constants";
import { Contact } from "./contact.interface";
import { Observable } from "rxjs"; // Un observable escucha en tiempo real los cambios emitidos

@Injectable({providedIn:'root'})


export class ConctactService{

  private readonly _firestore = inject(Firestore); // DB FIRESTORE. inyectamos al servicio con la base de datos de Firebase

  private readonly _contactCollection = collection(this._firestore,APP_CONSTANTS.COLLECTION_NAME) // collection(db,"contacts")

  // Método para crear un nuevo contacto
  newContact(contact: Partial<Contact>): Promise<DocumentReference<DocumentData>>  {
    return addDoc(this._contactCollection, {
      ...contact,
      created:Date.now(),
      updated:Date.now()
    });
  }

  // Método para obtener un contacto por id
  getContactById(){

  }

  // Método para actualizar un contacto
  updateContact(){

  }

  // Método para eliminar un contacto
  deleteContact(){

  }

  // Método para obtener todos los contactos
  getAllContacts():Observable<Contact[]> {
    const queryFn = query(this._contactCollection, orderBy('created','desc'));
    return collectionData(queryFn,{idField:'id'}) as Observable<Contact[]>
  }

}
