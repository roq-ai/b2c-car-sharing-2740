interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Fleet Manager', 'Admin'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View all available cars for booking',
    'Manage car bookings',
    'Cancel car bookings',
    'View booking history',
  ],
  ownerAbilities: ['Manage company registration', 'Invite Fleet Managers and Admins', 'Edit company details'],
  getQuoteUrl: 'https://app.roq.ai/proposal/17414269-ac25-46e9-acdf-8c0673069061',
};
