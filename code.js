function findProgrammersDay(year) {
    leapYearDay = "12.09.";
    nonLeapYearDay = "13.09.";

    if (year < 1918) {
        // Julian Calendar
        return (year % 4 == 0 ? leapYearDay : nonLeapYearDay) + year;
    }
    else if (year > 1918) {
        // Georgian Calendar
        var isLeapYear = year % 400 == 0 || year % 4 == 0 && year % 100 != 0;
        return (isLeapYear ? leapYearDay : nonLeapYearDay) + year;
    }
    else {
        // Transition Year
        return "26.09.1918";
    }
}