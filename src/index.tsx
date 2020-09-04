import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

export default function App(): JSX.Element {
  const [value, setValue] = useState("");
  debugger;
  return (
    <Fragment>
      <h1>Todo list</h1>
      <form>
        <input type="text" required />
        <button type="submit">Add Todo</button>
      </form>
      <h1>Titty gang!!</h1>
    </Fragment>
  );
}

const root = document.getElementById("app-root");

ReactDOM.render(<App />, root);
