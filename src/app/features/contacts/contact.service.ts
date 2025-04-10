import { Injectable, inject } from "@angular/core";
import { Firestore, collection, addDoc, DocumentReference, DocumentData, query, orderBy, collectionData, doc, updateDoc, deleteDoc  } from "@angular/fire/firestore";
import { APP_CONSTANTS } from "@shared/constants";
import { Contact } from "./contact.interface";
import { Observable } from "rxjs"; // Un observable escucha en tiempo real los cambios emitidos

@Injectable({providedIn:'root'})


export class ContactService{

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
  updateContact(id:string, contact:any){
    const docRef = this._getDocRef(id);
    updateDoc(docRef,{...contact})
  }

  // Método para eliminar un contacto
  deleteContact(id:string){
    const docRef = this._getDocRef(id);
    deleteDoc(docRef);
  }

  // Método para obtener todos los contactos
  getAllContacts():Observable<Contact[]> {
    const queryFn = query(this._contactCollection, orderBy('created','desc'));
    return collectionData(queryFn,{idField:'id'}) as Observable<Contact[]>
  }

  // método privado para obtener la referencia
  private _getDocRef(id:string){
    return doc(this._firestore,APP_CONSTANTS.COLLECTION_NAME,id)
  }

}
