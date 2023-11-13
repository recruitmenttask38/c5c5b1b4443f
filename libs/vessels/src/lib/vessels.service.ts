import { Injectable } from '@angular/core';
import { ApiService } from 'shared';
import { Vessel, VESSELS_GET_URL } from './vessels.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VesselsService {
  constructor(private apiService: ApiService) {}

  fetchVessels$(): Observable<Vessel[]> {
    return this.apiService.get$<Vessel[]>(VESSELS_GET_URL).pipe(map(response => response as Vessel[]));
  }
}
