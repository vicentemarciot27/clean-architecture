
/**
 * General-purpose date adapter interface that can be implemented by
 * any framework-specific date implementation.
 */

import { MomentDateImplementation } from "../../../frameworks/moment-js/momentDateImplementation.js"

export class DateAdapter {
    constructor() {
        this.dateImplementation = new MomentDateImplementation();
    }

    getCurrentDate() {
        return this.dateImplementation.getCurrentDate();
    }

    format(date, formatString) {
        return this.dateImplementation.format(date, formatString);
    }

    isInSameMinute(date1, date2) {
        return this.dateImplementation.isInSameMinute(date1, date2);
    }
    
}
