// External Imports
import moment from 'moment';


export class MomentDateImplementation {
    getCurrentDate() {
        return moment().toISOString();
    }

    format(date, formatString) {
        return moment(date).format(formatString);
    }

    isInSameMinute(date1, date2) {
        return moment(date1).isSame(date2, 'minute');
    }

}
