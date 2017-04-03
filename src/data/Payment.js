import uuidV4 from './uuid/v4';
import Payment from './Payment.js';
/**
 * @param uuid
 * @param loanID
 * @param date
 * @param totalPmt (amount of current payment)
 * @param intPaid (current interest amount paid)
 * @param princpalPaid (current principal paid)
 * @param remainingBalance 
 * 
 * @return interest paid
 * @return principal paid
 * @return remaining balance
 */

export default class {
    constructor(id, date, totMnthlyPmt, intPd, prinPd, remBal) {
        this._uuid = id
        this._date = date;
        this._currPrinBal = currPrinBal
        this._totMthlyPmt = payment;
        this._intPd = intPd;
        this._prinPd = prinPd;
        this._remBal = remBal;
    }
    get intPd() { return this._intPd; }
    get prinPd() { return this._prinPd; }
    get remBal() { return this._remBal; }


    set intPd(intPd) { this._intPd = intPd; }
    set princPd(prinPd) { this._prinPd = prinPd; }
    set remBal(remBal) { this._remBal = remBal; }

}