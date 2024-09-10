export function gregorianToJalali(gregorianDate) {

    let [gy, gm, gd] = gregorianDate.split('-').map(Number);

    const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    let jy = (gy <= 1600) ? 0 : 979;
    gy = (gy <= 1600) ? gy - 621 : gy - 1600;

    let gy2 = (gm > 2) ? gy + 1 : gy;
    let days = (365 * gy) + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400) - 80 + gd + g_d_m[gm - 1];

    let jy2 = 33 * Math.floor(days / 12053);
    days %= 12053;
    jy += 4 * Math.floor(days / 1461);
    days %= 1461;

    if (days > 365) {
        jy += Math.floor((days - 1) / 365);
        days = (days - 1) % 365;
    }

    const jm = (days < 186) ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
    const jd = (days < 186) ? 1 + (days % 31) : 1 + ((days - 186) % 30);
    jy = jy + jy2
    
    return `${jy}/${jm}/${jd}`
    // return { jy: jy + jy2, jm, jd };
}
