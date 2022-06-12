import Cookies from 'js-cookie';
import {addHours} from 'date-fns';

export const UI_ELEMENTS: any = {
    DATE: document.getElementById('date'),
    SUBMIT: document.getElementById('submit'),
    RESULT: document.getElementById('result'),
};

export function showResultCountdown(selectedDate: string, countdown: string) {
    const result = `Until ${selectedDate} left ${countdown}`;

    Cookies.set('lastResult', result, {expires: addHours(Date.now(), 1)});
    UI_ELEMENTS.RESULT.textContent = result;
}

function showLastResultOnReload() {
    const lastResult: string = Cookies.get('lastResult')
    if (lastResult) {
        UI_ELEMENTS.RESULT.textContent = Cookies.get('lastResult');
    }
}

showLastResultOnReload();
