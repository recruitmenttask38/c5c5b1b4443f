import { HttpHeaders } from '@angular/common/http';

export interface ApiResponse<T> {
  content?: T;
  createdId?: number;
  headers?: HttpHeaders;
  ok?: boolean;
  status?: number;
}
