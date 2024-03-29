import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123cde' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123cde'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('345abc', { note: 'New note value'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '345abc',
    updates: { note: 'New note value' }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Coffee',
    amount: 350,
    createdAt: 10000,
    note: 'That coffee was tasty'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)  
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description : '',
      note : '',
      amount : 0,
      createdAt : 0  
    }
  });
});