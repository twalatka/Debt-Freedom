export default class {
    /**
     * construtor method
     * @param uuid
     * @param loanNum
     * @param type  Debt type, ie home, vehicle, loans
     * @param Principal  Outstanding balance
     * @param rate  Percentage rate
     * @param payment  Monthly pamyment
     * @param date payment due date
     * 
     * @return months till debt paid off
     */

    constructor(id, loanNum, type, prin, rate, pmt, date, mthsRem) {
        //this.uuid = id;
        this.loanNum = loanNum;
        this.type = type;
        this.prin = prin;
        this.rate = rate;
        this.pmt = pmt;
        this.date = date;
        this.mthsRem = mthsRem;
    }

    // return the months till final pmt and amount of interest paid
    // get mthsRem() { return this._mthsRem; }


    // set mthsRem(mthsRem) { this._mthsRem = mthsRem; }
};