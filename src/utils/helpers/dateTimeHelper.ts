export function dateTimeHelper(departureTime: string, arrivalTime: string) {
    return new Date(arrivalTime).getTime() > new Date(departureTime).getTime();
}