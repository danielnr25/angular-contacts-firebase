import { Component } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { ConctactService } from '../contact.service';
@Component({
  selector: 'app-list',
  imports: [GridComponent],
  template: `
   <section>
      <app-grid />
   </section>
  `,
  styles: ``
})
export class ListComponent {

}
