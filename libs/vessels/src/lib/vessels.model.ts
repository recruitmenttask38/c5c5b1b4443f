import { ColDefField } from 'ag-grid-community/dist/lib/entities/colDef';

export const VESSELS_GET_URL = 'vessels.json';
import { ColDef } from 'ag-grid-community';

export interface Vessel {
  id: number;
  name: string;
  mmsi: number;
  imo: number;
  companyId: number;
  companyName: string;
  startDate: Date;
  active: boolean;
  vesselType: string;
}

export enum VesselsTableColumnNames {
  name = 'Name',
  mmsi = 'Mmsi',
  imo = 'Imo',
  companyName = 'Company Name',
  vesselType = 'Vessel Type',
}

export const VEESEL_TABEL_COLUMNS: ColDef<Partial<Vessel>>[] = Object.keys(VesselsTableColumnNames).map(key => ({
  field: key as keyof Vessel,
  headerName: Object(VesselsTableColumnNames)[key],
}));
