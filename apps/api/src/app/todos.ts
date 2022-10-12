import { Express } from 'express';
import { Todo } from '@jillian/data';

const todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

export function addTodoRoutes(app: Express) {
  app.get('/api/todos', (req, resp) => resp.send(todos));
  app.post('/api/addTodo', (req, resp) => {
    const newTodo = {
      title: `New todo ${todos.length + 1}`,
    };
    todos.push(newTodo);
    resp.send(newTodo);
  });
  app.delete('/api/deleteTodo', (req, resp) => {
    todos.pop();
    resp.send(todos);
  });
}
