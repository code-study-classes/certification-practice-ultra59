export const calculateDistance = (x1, x2) =>  {
    if (x2 > x1) {
       return x2 - x1;
 } 
    return x1 - x2;
};
console.log(calculateDistance(0, 5));

export const calculateSegmentProduct = (A, B, C) => {
    const resultB = B - C;
    const resultC = C - A;

     if (A <= C && B >= C) {
        return resultB * resultC;
    };
};
console.log(calculateSegmentProduct(0, 5, 2));

export const calculateKilobytes = (kb) => {

    let kb = 1024;

    const result = Math.trunc(calculateKilobytes / kb);

    return result; 

};

export const calculateSegments = (lengthA, lengthB) => {
    const result = Math.trunc(lengthA / lengthB);

    if(lengthA % lengthB === 0) {
        return lengthA / lengthB;
    } else {
        return result;
    }

};
console.log(calculateSegments(10, 3));

export const calculateDigitSum = (num) => {
    const changeVaculateDigitSum = String(num);

    return Number(changeVaculateDigitSum[0]) + Number(changeVaculateDigitSum[1]);

};
console.log(calculateDigitSum(47));

export const swapHundredsAndTens = () => {
    
};
