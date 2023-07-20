"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receivable = void 0;
class Receivable {
    constructor(data) {
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
exports.Receivable = Receivable;
