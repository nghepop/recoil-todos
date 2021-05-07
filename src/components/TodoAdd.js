import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../state';

const TodoAdd = () => {
  const [todoValue, setTodoValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList(todoList => [
      ...todoList,
      {
        id: Math.random().toString(),
        task: todoValue,
      },
    ]);
    setTodoValue('');
  };

  const handleTodoValue = event => {
    setTodoValue(event.target.value);
  };

  return (
    <form>
      <input type="text" value={ todoValue } onChange={ handleTodoValue } />
      <button type="button" onClick={ addItem }>Add</button>
    </form>
  );
};

export default TodoAdd;
