import operate from '../logic/operate';

it('test the addition operation', () => {
  const test1 = operate(10, 10, '+');
  const test2 = operate(5, 6, '+');
  const test3 = operate(9, 0, '+');

  expect(test1).toBe('20');
  expect(test2).toBe('11');
  expect(test3).toBe('9');
});

it('test the subtract operation', () => {
  const test1 = operate(10, 10, '-');
  const test2 = operate(9, 6, '-');
  const test3 = operate(9, 0, '-');

  expect(test1).toBe('0');
  expect(test2).toBe('3');
  expect(test3).toBe('9');
});

it('test the multiply operation', () => {
  const test1 = operate(10, 10, 'x');
  const test2 = operate(9, 6, 'x');
  const test3 = operate(0, 0, 'x');

  expect(test1).toBe('100');
  expect(test2).toBe('54');
  expect(test3).toBe('0');
});

it('test the division operation', () => {
  const test2 = operate(10, 10, '÷');
  expect(test2).toBe('1');
});

it('test the % operation', () => {
  const test2 = operate(10, 10, '%');
  expect(test2).toBe('0');
});
