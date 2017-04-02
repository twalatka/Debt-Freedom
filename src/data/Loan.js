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

    constructor(uuid, type, principal, rate, payment, date, monRem) {
        this._uuid = uuid;
        this._type = type;
        this._principal = principal;
        this._rate = rate;
        this._payment = payment;
        this._date = date
        this._mthsRem = mthsRem
    }

    // return the months till final pmt and amount of interest paid
    get mthsRem() { return this._mthsRem; }


    set mthsRem(mthsRem) { this._mthsRem = mthsRem; }
}