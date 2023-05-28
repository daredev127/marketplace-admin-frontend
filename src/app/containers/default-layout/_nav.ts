import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Dashboard',
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
  },
  {
    title: true,
    name: 'User Management',
  },
  {
    name: 'Sellers',
    url: '/users/seller',
  },
  {
    name: 'Buyers',
    url: '/users/buyer',
  },
  {
    name: 'Admins',
    url: '/users/admin',
  },
  {
    name: 'Logistics Staff',
    url: '/users/logistics-staff',
  },
  {
    title: true,
    name: 'Reports',
  },
  {
    name: 'Sales Summary',
    url: '/reports/sales-summary',
  },
  {
    name: 'Sales Details',
    url: '/reports/sales-details',
  },
  {
    name: 'Seller Sales Report',
    url: '/reports/seller-sales',
  },
  {
    name: 'Buyer Demographics',
    url: '/reports/buyer-demographics',
  },
  {
    name: 'Seller Demographics',
    url: '/reports/seller-demographics',
  },
];
