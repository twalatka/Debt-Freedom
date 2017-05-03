/**
* payment.js
* Define the payeent object
* Author: Teresa Walatka
* Created: 4/15/17
* Modified: 4/25/17
 */

export default class {
    constructor(id, date, currPrinBal, totMthlyPmt, intPd, prinPd, remBal) {
        //this.uuid = id
        this.date = date;
        this.currPrinBal = currPrinBal
        this.totMthlyPmt = totMthlyPmt;
        this.intPd = intPd;
        this.prinPd = prinPd;
        this.remBal = remBal;
        this.active = true;
    }
};
    