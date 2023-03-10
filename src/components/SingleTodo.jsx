import {useParams, Link} from "react-router-dom";

function SingleTodo({todos}) {
    const {id} = useParams();
    const localTodos = JSON.parse(localStorage.getItem("todos"))
    // const todo = todos.find((item) => item.id === parseInt(id));
    const todo = localTodos.find((item) => item.id === parseInt(id));

    return (
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{todo.title}</h5>
                        <p className="card-text">{todo.description}</p>
                        <p className="card-text">{todo.isCompete.toString()}</p>
                        <Link className="btn btn-primary" to="/">Back</Link>
                    </div>
            </div>
    );
}

export default SingleTodo;