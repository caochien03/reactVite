import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import "./components/todo/todo.css";
import ReactLogo from "./assets/react.svg";
import { useState } from "react";
const App = () => {
    function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const [todoList, setTodoList] = useState([
        {
            id: randomIntFromInterval(0, 1000000),
            name: "learning react",
        },
    ]);
    const addNewTodo = (name) => {
        setTodoList([
            ...todoList,
            {
                id: randomIntFromInterval(0, 1000000),
                name: name,
            },
        ]);
    };
    const deleteTodo = (idValue) => {
        const newTodoList = todoList.filter((item) => item.id != idValue);
        setTodoList(newTodoList);
    };
    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew addNewTodo={addNewTodo} />
            <TodoData todoList={todoList} deleteTodo={deleteTodo} />
            <div>
                <img className="logo" src={ReactLogo} alt="" />
            </div>
        </div>
    );
};

export default App;
