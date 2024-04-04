function calculateDaysBetweenDates(begin, end) {
    const beginDate = new Date(begin);
    const endDate = new Date(end);
    const timeDifference = endDate.getTime() - beginDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    return daysDifference;
}
console.log(calculateDaysBetweenDates('2022-01-01', '2022-12-31'));
function calculateAge(birthDate) {
    const currentDate = new Date();
    const birthDateObj = new Date(birthDate);
    const ageInMilliseconds = currentDate - birthDateObj;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(ageInYears);
}

console.log(calculateAge('1990-01-01'));