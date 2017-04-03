;
export default class {
    /**
     * construtor method
     * @param uuid
     * @param type  Debt type, ie home, vehicle, loans
     * @param Principal  Outstanding balance
     * @param rate  Percentage rate
     * @param payment  Monthly pamyment
     * @param date payment due date
     * 
     * @return months till debt paid off
     */

    constructor(id, loanNum, type, prin, rate, pmt, date, monRem) {
        this._uuid = id;
        this._loanNum = loanNum;
        this._type = type;
        this._prin = prin;
        this._rate = rate;
        this._pmt = pmt;
        this._date = date
        this._mthsRem = mthsRem
    }

    // return the months till final pmt and amount of interest paid
    get mthsRem() { return this._mthsRem; }


    set mthsRem(mthsRem) { this._mthsRem = mthsRem; }
}