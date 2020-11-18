import selectExpenses from '../../../selectors/expenses';

const expenses = [{
  id: '1',
  description: 'water',
  note: '',
  amount: '100',
  createdAt: 0
}, {
  id: '2',
  description: 'PC',
  note: '',
  amount: 150000,
  createdAt: -2000
}, {
  id: '3',
  description: 'Humberger',
  note: '',
  amount: 300,
  createdAt: 100000
}];

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[0] ]);
});