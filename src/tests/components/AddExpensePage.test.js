import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { expenses } from '../fixtures/expenses';
import { AddExpensePage } from '../../components/AddExpensePage';

let onSubmit;
let wrapper;
let history;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
});

test('should render add expense page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[0]);
});
