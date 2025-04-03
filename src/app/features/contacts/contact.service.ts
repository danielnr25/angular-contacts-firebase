import { Injectable, inject } from "@angular/core";
import { Firestore, collection, addDoc  } from "@angular/fire/firestore";
import { APP_CONSTANTS } from "@shared/constants";
@Injectable({providedIn:'root'})


export class ConctactService{

  private readonly _firestore = inject(Firestore); // DB FIRESTORE. inyectamos al servicio con la base de datos de Firebase

  private readonly _contactCollection = collection(this._firestore,APP_CONSTANTS.COLLECTION_NAME) // collection(db,"contacts")

  // Método para crear un nuevo contacto
  newContact(){
    return addDoc(this._contactCollection, {
      name: "Tokyo",
      country: "Japan"
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
  getAllContacts(){

  }

}
