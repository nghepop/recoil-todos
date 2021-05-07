import { atom } from 'recoil';

const TODO_LIST = 'todoListState';
export const todoListState = atom({
  key: TODO_LIST,
  default: [
    { id: 1, task: 'Join JSLancer' }
  ]
});
