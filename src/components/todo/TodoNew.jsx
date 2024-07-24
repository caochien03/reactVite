import { useState } from "react";

function TodoNew(props) {
    // eslint-disable-next-line react/prop-types
    const { addNewTodo } = props;
    const [valueInput, setValueInput] = useState("");
    const handleOnChange = (value) => {
        setValueInput(value);
    };
    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("");
    };
    return (
        <div className="todo-new">
            <input
                className="todo-input"
                type="text"
                placeholder="Enter your task"
                value={valueInput}
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button className="todo-button" onClick={handleClick}>
                Add
            </button>
        </div>
    );
}

export default TodoNew;
