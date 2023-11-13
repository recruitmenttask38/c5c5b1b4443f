import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VesselsComponent } from './components/vesseles/vessels.component';
import { AgGridModule } from 'ag-grid-angular';
import { RouterModule } from '@angular/router';
import { VesselsService } from './vessels.service';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule,
    RouterModule.forChild([
      {
        path: '',
        component: VesselsComponent,
      },
    ]),
  ],
  providers: [VesselsService],
  declarations: [VesselsComponent],
})
export class VesselsModule {}
