export const fileterDateForLineChart = (str) => {
    const strArr = str.split('-');
    
    return Date.UTC(parseInt(strArr[0]),parseInt(strArr[1])-1, parseInt(strArr[2])) 
}