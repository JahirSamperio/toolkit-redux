import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi"

export const TodoApp = () => {

    // const {data: todos = [], isLoading} = useGetTodosQuery();
    const [todoId, setTodoId] = useState(1);
    const {data: todo, isLoading} = useGetTodoQuery(todoId);
    // console.log(todo.title)
    // console.log(todos[0].id)

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading... { isLoading ? 'True' : 'False' }</h4>
            <pre>...</pre>

            {/* <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}>
                            <strong> { todo.completed ? 'DONE' : 'PENDING' } </strong>
                            {todo.title}
                        </li>
                    ))
                }
            </ul> */}

            {/* <h2>{todo.title}</h2> */}
            <pre>{JSON.stringify(todo)}</pre>

            <button onClick={() => todoId > 0 && setTodoId(todoId - 1)}>Previous Todo</button>
            <button onClick={() => setTodoId(todoId + 1)}>Next Todo</button>
        </>
    )
}
