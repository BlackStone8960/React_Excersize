import expenses from "../../selectors/expenses";
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

});

test('should setup add expense action object with default values', () => {

});