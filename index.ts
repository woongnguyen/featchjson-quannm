import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
interface Todo {
  id: number;
  title: string;
  complete: boolean;
}
axios.get(url).then(response => {
  const todo = response.data as Todo;
  const ID = todo.id;
  const title = todo.title;
  const complete = todo.completed;

  console.log(
    'The todo with id ',
    ID,
    ' Has a title of: ',
    title,
    ' It is finished: ',
    complete
  );
});
