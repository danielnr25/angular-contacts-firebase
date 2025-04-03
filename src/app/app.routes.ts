import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'', // este es el path inicial de la aplicación
    redirectTo:'/contacts', // redirige a la ruta /contacts
    pathMatch:'full' // redirege a la ruta /contacts cuando la ruta es vacía
  },
  {
    path:'contacts', // está es la ruta /contacts
    loadChildren: () => import('./features/contacts/contacts.routes')
  },
  {
    path:"**", // cualquier ruta no definida
    redirectTo: '/contacts'
  }
];
