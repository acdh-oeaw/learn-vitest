import { test, assert, expect, describe, expectTypeOf } from 'vitest';
import {
  add,
  containsString,
  isEven,
  multiply,
  reverseString,
} from '../src/basic';

describe('Basic.ts suite', () => {
  test('Should add two numbers together and return the correct result', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(2, 2)).toBe(4);
    expect(add(3, 2)).toBe(5);
    expect(add(-3, 2)).toBe(-1);
    expect(add(-3, -2)).toBe(-5);
  });

  test('Should multiply two numbers and return the correct result', () => {
    expect(multiply(1, 2)).toBe(2);
    expect(multiply(2, 2)).toBe(4);
    expect(multiply(3, 2)).toBe(6);
    expect(multiply(-3, 2)).toBe(-6);
    expect(multiply(-3, -2)).toBe(6);
  });

  test('Should determine whether a number is even (returns true) or odd (returns false)', () => {
    expect(isEven(2)).toBeTruthy();
    expect(isEven(4)).toBeTruthy();
    expect(isEven(7)).toBeFalsy();
  });

  test('Should check if containsString returns the right value', () => {
    expect(containsString('test')).toBeTruthy();
  });

  test.skip('Should check if the function reverses the input string', () => {
    const result = reverseString('anna');
    assert(result, 'Is not reversed');
    assert.equal(result, 'anna', 'is not reversed');

    const word2 = reverseString('Otto');
    assert.notEqual(word2, 'otto', 'We have another error');
    assert.equal(word2, 'ottO', 'The order has not been reversed');
    expectTypeOf(word2).toEqualTypeOf('Otto');
  });
});

describe.todo('Implement suite for following math functions');
