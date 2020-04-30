import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

import { PoPageDynamicEditBeforeSave } from './interfaces/po-page-dynamic-edit-before-save.interface';
import { PoPageDynamicEditActions } from '@po-ui/ng-templates/lib';

@Injectable({
  providedIn: 'root'
})
export class PoPageDynamicEditActionsService {
  constructor(private http: HttpClient) {}

  beforeSave(path: PoPageDynamicEditActions['beforeSave']): Observable<PoPageDynamicEditBeforeSave> {
    if (!path) {
      return of({});
    }

    if (typeof path === 'string') {
      return this.http.post(path, {});
    }

    return of(path());
  }
}
