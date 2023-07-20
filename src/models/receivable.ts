export class Receivable {
  reference: string;
  currencyCode: string;
  issueDate: string;
  openingValue: number;
  paidValue: number;
  dueDate: string;
  closedDate?: string | null;
  cancelled?: boolean;
  debtorName: string;
  debtorReference: string;
  debtorAddress1?: string | null;
  debtorAddress2?: string | null;
  debtorTown?: string | null;
  debtorState?: string | null;
  debtorZip?: string | null;
  debtorCountryCode: string;
  debtorRegistrationNumber?: string | null;

  constructor(data: any) {
    this.reference = data.reference;
    this.currencyCode = data.currencyCode;
    this.issueDate = data.issueDate;
    this.openingValue = data.openingValue;
    this.paidValue = data.paidValue;
    this.dueDate = data.dueDate;
    this.closedDate = data.closedDate || null;
    this.cancelled = data.cancelled || false;
    this.debtorName = data.debtorName;
    this.debtorReference = data.debtorReference;
    this.debtorAddress1 = data.debtorAddress1 || null;
    this.debtorAddress2 = data.debtorAddress2 || null;
    this.debtorTown = data.debtorTown || null;
    this.debtorState = data.debtorState || null;
    this.debtorZip = data.debtorZip || null;
    this.debtorCountryCode = data.debtorCountryCode;
    this.debtorRegistrationNumber = data.debtorRegistrationNumber || null;
  }
}
