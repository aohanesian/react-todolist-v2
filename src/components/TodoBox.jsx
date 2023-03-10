import React, {useState, useEffect} from 'react';
import TodoItem from "./TodoItem";
import {BrowserRouter, Routes, Router, Route, Link, useParams} from 'react-router-dom';
import SingleTodo from "./SingleTodo";

const initTodo = {title: '', description: '', isCompete: false};

function TodoBox(props) {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
    const [todoText, setTodoText] = useState(initTodo);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setTodoText((prevState) => ({...prevState, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = {id: Date.now(), ...todoText};
        setTodos([...todos, newTodo]);
        setTodoText(initTodo);
    };

    const handleRemoveItem = (id) => (event) => {
        event.preventDefault();
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }

    const handleResetForm = (event) => {
        event.preventDefault()
        setTodoText(initTodo)
    }

    const handleDeleteAll = (event) => {
        event.preventDefault()
        setTodos([])
    }

    const handleComplete = (id) => (event) => {
        const newState = todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, isCompete: event.target.checked}
            }
            return todo;
        });
        setTodos((prevState) => (newState))
    }

    return (
        <div className="row">
            <div className="col-4">
                <form id="todoForm">
                    <div className="mb-3">
                        <label className="form-label">Task title</label>
                        <input value={todoText.title} type="text" placeholder="Task title" name="title"
                               className="form-control"
                               onChange={handleInputChange} required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Task body</label>
                        <textarea value={todoText.description} name="description"
                                  className="form-control"
                                  placeholder="Task body" cols="30"
                                  rows="10" onChange={handleInputChange} required></textarea>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Create Task!
                        </button>
                        <button type="reset" className="btn btn-warning" onClick={handleResetForm}>Clear form
                        </button>
                        <button type="button" className="btn btn-danger" onClick={handleDeleteAll}>Delete All!
                        </button>
                    </div>
                </form>
            </div>
            <div className="col-8">
                <Routes>
                    <Route path="/todo/:id" todos={todos} element={<SingleTodo/>}/>

                <Route path="/" element={ <div className="row" id="todoItems">
                    {todos.map((item) => (
                        <React.Fragment key={item.id}>
                            <TodoItem id={item.id} title={item.title} description={item.description}
                                      isChecked={item.isCompete} onTask={handleComplete(item.id)}
                                      onRemove={handleRemoveItem(item.id)}/>
                        </React.Fragment>
                    ))}
                </div>}/>
                </Routes>
            </div>
        </div>
    );
}

export default TodoBox;
