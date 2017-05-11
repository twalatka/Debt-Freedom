/**
* payment.js
* Define the payeent object
* Author: Teresa Walatka
* Created: 4/15/17
* Modified: 4/25/17
 */

export default class {
    constructor(id, user, loanNum, pmtNum, date, totMthlyPmt, intRate, intPd, prinPd, remBal) {
        this._id = id;
        this.user = user;
        this.loanNum = loanNum;
        this.pmtNum = pmtNum;
        this.date = date;
        this.totMthlyPmt = totMthlyPmt;
        this.intRate = intRate            
        this.intPd = intPd;
        this.prinPd = prinPd;
        this.remBal = remBal;
        this.active = true;
    }
};
    