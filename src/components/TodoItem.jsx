import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link, useParams} from 'react-router-dom';
import SingleTodo from "./SingleTodo";

function TodoItem(props) {

    return (

        <div className="col-4">
            <div className="taskWrapper">
                <div className="taskHeading">{props.title}</div>
                <div className="taskDescription">{props.description}</div>
                <hr/>
                <label className="completed form-check">
                    <input data-item-id={props.id} checked={props.isChecked} onChange={props.onTask} type="checkbox"
                           className="form-check-input"/>
                    <span>Завершено ?</span>
                </label>
                <hr/>
                <button className="btn btn-danger delete-btn" data-item-id={props.id} onClick={props.onRemove}>Удалить
                </button>
                <Link to={`/todo/${props.id}`}>info</Link>
            </div>
        </div>
    );
}

export default TodoItem;