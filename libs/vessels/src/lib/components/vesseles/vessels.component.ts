import { Component } from '@angular/core';
import { VEESEL_TABEL_COLUMNS, Vessel } from '../../vessels.model';
import { VesselsService } from '../../vessels.service';
import { debounceTime, fromEvent, Observable } from 'rxjs';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'lib-vesseles',
  templateUrl: './vessels.component.html',
  styleUrls: ['./vessels.component.scss'],
})
export class VesselsComponent {
  vessels$: Observable<Vessel[]> = this.vesselsService.fetchVessels$();
  protected readonly VEESEL_TABEL_COLUMNS: ColDef<Partial<Vessel>>[] = VEESEL_TABEL_COLUMNS;
  private gridApi!: GridApi;
  private windowResize$: Observable<Event> = fromEvent(window, 'resize').pipe(untilDestroyed(this), debounceTime(200));

  constructor(private vesselsService: VesselsService) {}

  onGridReady(params: GridReadyEvent<Partial<Vessel>>): void {
    this.gridApi = params.api;
    this.sizeToFit();
    this.windowResize$.subscribe(() => this.sizeToFit());
  }

  private sizeToFit(): void {
    this.gridApi.sizeColumnsToFit();
  }
}
