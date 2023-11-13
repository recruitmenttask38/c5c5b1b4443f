import { MenuItem } from 'primeng/api/menuitem';

export const enum APP_ROUTES {
  VESSELS = '',
  EMISSIONS = 'emissions',
}

export const APP_NAV_ITEMS: MenuItem[] = [
  { label: 'Vessels', url: APP_ROUTES.VESSELS, target: '_self', routerLinkActiveOptions: { exact: true } },
  { label: 'Emissions', url: APP_ROUTES.EMISSIONS, target: '_self', routerLinkActiveOptions: { exact: true } },
];
