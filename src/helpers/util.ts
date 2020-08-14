/**
 * 
 * @param length return string lenght (max 15)
 */
export const RandomStringGenerator = (length: number = 5) => {
    return Math.random().toString(20).substr(2, length);
}

/**
 * Check of tow object match
 * @param dataOne First object
 * @param dataTwo Second object
 */
export const CheckDataMatches = (dataOne: any, dataTwo: any) => {
    return JSON.stringify(dataOne) === JSON.stringify(dataTwo);
}