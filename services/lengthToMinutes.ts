const lengthToMinutes = (length: number): string => {
    const lengthDivided = length / 6;

    const calculateTotalTime = Math.ceil(lengthDivided / 300);

    if (calculateTotalTime < 60) return `${calculateTotalTime} minute read`;
    return `Over an hour read`;
};

export default lengthToMinutes;
