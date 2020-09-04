import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

// interface ITodo2 extends ITodo {
//   tags: string[];
// }

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addToDo(value);
    setValue("");
  };

  const addToDo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <h1>Todo list</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map(
          (todosItem: ITodo, index: number): JSX.Element => (
            <Fragment key={index}>
              <div
                style={{
                  textDecoration: todosItem.complete ? "line-through" : "",
                }}
              >
                {todosItem.text}
              </div>
              <button type="button" onClick={(): void => completeTodo(index)}>
                {todosItem.complete ? "UnComplete" : "Complete"}
              </button>
              <button type="button" onClick={(): void => removeTodo(index)}>
                Remove
              </button>
            </Fragment>
          )
        )}
      </section>
    </Fragment>
  );
}

const root = document.getElementById("app-root");

ReactDOM.render(<App />, root);
