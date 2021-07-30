import React from 'react'
export default function DatetimeForm (updated){
    let now = new Date()
    let date = new Date(updated);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();
    let hr = date.getHours()
    let min = date.getMinutes();

    let dt_now = now.getDate();
    let month_now = now.getMonth() + 1;
    let year_now = now.getFullYear();

    if (min < 10) {
        min = "0" + min;
    }
    if (dt < 10) {
        dt = '0' + dt;
    }
    if (month < 10) {
        month = '0' + month;
    }
    let ampm = "AM";
    if (hr > 12) {
        hr -= 12;
        ampm = "PM";
    }
    if (hr < 10) {
        hr = "0" + hr;
    }
    if (dt == dt_now && month == month_now && year == year_now) {
        return ('Today');
    } else if ((dt_now - dt) == 1) {
        return ('Yesterday' + ' ' + 'at' + ' ' + hr + ':' + min + ampm);
    } else if ((dt_now - dt) < 1 && !(dt_now - dt) > 5 && month == month_now && year == year_now) {
        return (dt_now - dt + ' ' + 'days' + ' ' + 'ago');
    } else {
        return (dt + '-' + month + '-' + year + '-' + ' at ' + hr + ':' + min + ampm);
    }
    // return (+ dt + '-' + month + '-' + year + 'at' + hr + '' + ampm)
}
