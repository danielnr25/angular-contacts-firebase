import { Component, OnInit,effect,inject,input, viewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ContactService } from '@features/contacts/contact.service';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ModalService } from '@components/modal/modal.service';
import { ModalComponent } from '@components/modal/modal.component';
import { APP_CONSTANTS } from '@shared/constants';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

const MATERIAL_MODULES = [MatPaginatorModule,MatTableModule, MatSortModule,MatIconModule,MatButtonModule]

@Component({
  selector: 'app-grid',
  imports: [MATERIAL_MODULES],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})


export class GridComponent<DATA> implements OnInit {
  displayedColumns = input.required<string[]>();
  data = input.required<DATA[]>();
  dataSource = new MatTableDataSource<DATA>();
  sortableColumns = input<string[]>([]);
  private readonly _sort = viewChild.required<MatSort>(MatSort);
  private readonly _contactSvc = inject(ContactService);
  private readonly _paginator = viewChild.required<MatPaginator>(MatPaginator);
  private readonly _modalSvc = inject(ModalService);
  constructor(){
    effect(()=>{
      if(this.data()){
        this.dataSource.data = this.data();
        this.dataSource.paginator = this._paginator();
      }
    },{allowSignalWrites: true});
  }

  ngOnInit(): void {
    this.dataSource.data = this.data();
    this.dataSource.sort = this._sort();
  }

  openEditForm(data:DATA):void{
    console.log(data)
    this._modalSvc.openModal<ModalComponent,DATA>(ModalComponent,data,true)
  }

  deleteContact(id:string) :void{
    const confirmation = confirm(APP_CONSTANTS.MESSAGES.CONFIRMATION_PROMPT);
    if(confirmation){
      console.log('Eliminando')
    }else{
      return;
    }
  }

}
