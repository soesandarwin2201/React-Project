import calculate from '../logic/calculate';

it('return null when user clicked Ac button', () => {
  const object1 = { total: '50', next: null, operation: null };
  const object2 = { total: '0', next: 20, operation: '-' };

  expect(calculate(object1, 'AC')).toStrictEqual({
    total: null,
    next: null,
    operation: null,
  });

  expect(calculate(object2, 'AC')).toStrictEqual({
    total: null,
    next: null,
    operation: null,
  });
});

it('test the logic for = button', () => {
  const object1 = { total: '50', next: 10, operation: '+' };
  const object2 = { total: '7', next: 2, operation: '-' };
  const object3 = { total: '10', next: 10, operation: 'x' };
  const object4 = { total: '9', next: 9, operation: '÷' };

  expect(calculate(object1, '=')).toStrictEqual({
    total: '60',
    next: null,
    operation: null,
  });
  expect(calculate(object2, '=')).toStrictEqual({
    total: '5',
    next: null,
    operation: null,
  });
  expect(calculate(object3, '=')).toStrictEqual({
    total: '100',
    next: null,
    operation: null,
  });
  expect(calculate(object4, '=')).toStrictEqual({
    total: '1',
    next: null,
    operation: null,
  });
});

it('test the logic for the dot button', () => {
  const object = { total: '50', next: '10', operation: null };
  const object1 = { total: '20', next: '30', operation: null };
  expect(calculate(object, '.')).toEqual({
    total: '50',
    next: '10.',
    operation: null,
  });
  expect(calculate(object1, '.')).toEqual({
    total: '20',
    next: '30.',
    operation: null,
  });
});

it('test the logic for the +/- button', () => {
  const object = { total: '50', next: '10', operation: null };
  expect(calculate(object, '+/-')).toEqual({
    total: '50',
    next: '-10',
    operation: null,
  });
});
