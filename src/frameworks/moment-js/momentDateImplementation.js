// External Imports
import moment from 'moment';


export class MomentDateImplementation {
    getCurrentDate() {
        return moment().toISOString();
    }

    format(date, formatString) {
        return moment(date).format(formatString);
    }

    // ... any other moment.js specific methods
}
