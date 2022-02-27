// alert('Hello World!');

import TodoList from "./TodoList.js";

$("#wd-todos").append(`
    <div class="container">
        <h1>Todo example</h1>
        ${TodoList()}
    </div>
`);
