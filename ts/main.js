"use strict";
exports.__esModule = true;
var view_1 = require("./view");
var date_fns_1 = require("date-fns");
view_1.UI_ELEMENTS.SUBMIT.addEventListener('click', getResultCountdown);
function getResultCountdown() {
    var selectedDate = view_1.UI_ELEMENTS.DATE.valueAsNumber;
    if (selectedDate) {
        var formattedSelectedDate = (0, date_fns_1.format)(new Date(selectedDate), 'PPP');
        var restTime = (0, date_fns_1.intervalToDuration)({
            start: Date.now(),
            end: selectedDate
        });
        var formattedRestTime = (0, date_fns_1.formatDuration)(restTime, { format: ['years', 'months', 'days', 'hours', 'minutes'] });
        (0, view_1.showResultCountdown)(formattedSelectedDate, formattedRestTime);
    }
}
