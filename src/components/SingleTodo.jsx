import {useParams, Link} from "react-router-dom";

function SingleTodo({todos}) {
    const {id} = useParams();
    const localTodos = JSON.parse(localStorage.getItem("todos"))
    // const todo = todos.find((item) => item.id === parseInt(id));
    const todo = localTodos.find((item) => item.id === parseInt(id));

    return (
        <div>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>{todo.isCompete.toString()}</p>
            <Link to="/">Back</Link>
        </div>
    );
}

export default SingleTodo;