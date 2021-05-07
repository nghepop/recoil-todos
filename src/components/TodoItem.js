import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../state';

const TodoItem = ({ id, task }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const deleteTodoItem = () => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <li>      
      <span>{ task }</span>
      <button onClick={ deleteTodoItem }> Delete </button>
    </li>
  );
};

export default TodoItem;
