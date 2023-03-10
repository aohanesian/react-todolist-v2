import './App.css';
import Heading from "./components/Heading";
import TodoBox from "./components/TodoBox";
import {Route, Routes} from "react-router-dom";
import SingleTodo from "./components/SingleTodo";
import React from "react";

function App() {
    return (
        <div className="App">
            <main>
                <div className="container">
                    <Heading/>
                    <TodoBox/>
                </div>
            </main>
        </div>
    )
}

export default App;
