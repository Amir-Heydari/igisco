export function getMonthName(monthNumber, lang) {
    // English (Gregorian) month names
    const gregorianMonths = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Persian (Jalali) month names
    const persianMonths = [
        'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
        'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
    ];

    // Return month name based on the language
    if (lang === 'en') {
        return gregorianMonths[monthNumber - 1]; // English (1-based indexing)
    } else if (lang === 'fa') {
        return persianMonths[monthNumber - 1]; // Persian (1-based indexing)
    } else {
        return 'Invalid language or month number';
    }
}
