export const add = (a: number, b: number) => a + b;

export const multiply = (a: number, b: number) => a * b;

export const isEven = (num: number) => num % 2 === 0;

export const containsString = (text: string) => {
  if (text === 'sometext') {
    // Does some code in case something happens here
    return false;
  }
  return true;
};

export const reverseString = (text: string) => {
  return text.split('').reverse().join(',');
};
