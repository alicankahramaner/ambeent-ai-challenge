/**
 * 
 * @param length return string lenght (max 15)
 */
export const RandomStringGenerator = (length: number = 5) => {
    return Math.random().toString(20).substr(2, length);
}

export const CheckMergeData = (dataOne: any, dataTwo: any) => {
    return JSON.stringify(dataOne) === JSON.stringify(dataTwo);
}