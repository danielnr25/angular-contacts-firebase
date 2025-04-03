import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { ContactService } from '../contact.service';
import { ColumnKeys,Contact } from '../contact.interface';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import { tap } from 'rxjs';
@Component({
  selector: 'app-list',
  imports: [GridComponent],
  template: `
   <section>
      <app-grid [displayedColumns]="displayedColumns" [data]="contacts()" [sortableColumns] = "sortables" />
   </section>
  `,
  styles: ``
})
export class ListComponent implements OnInit {
  displayedColumns: ColumnKeys<Contact> = ['id', 'name', 'email','phone','country','actions'];
  sortables: ColumnKeys<Contact> = ['id','name','email','phone','country'];
  private readonly _contactSvc = inject(ContactService);
  private readonly _destroyRef = inject(DestroyRef)
  contacts = signal<Contact[]>([]);

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts(){
    this._contactSvc.getAllContacts()
    .pipe(takeUntilDestroyed(this._destroyRef),
      tap((contacts:Contact[]) =>this.contacts.set(contacts)))
    .subscribe();
  }

}
