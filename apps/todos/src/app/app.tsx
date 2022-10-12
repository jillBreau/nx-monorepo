import { useEffect, useState } from 'react';
import { Todo } from '@jillian/data';
import { Todos } from '@jillian/ui';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  function deleteTodo() {
    fetch('/api/deleteTodo', {
      method: 'DELETE',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodos) => {
        setTodos([...newTodos]);
      });
  }

  return (
    <>
      <h1>Todos</h1>
      <Todos todos={todos}/>
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
      <button id={'delete-todo'} onClick={deleteTodo}>
        Delete Todo
      </button>
    </>
  );
};

export default App;
