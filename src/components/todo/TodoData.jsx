function TodoData({ todoList, deleteTodo }) {
    const handleDelete = (idValue) => {
        deleteTodo(idValue);
    };
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div key={index} className="todo-item">
                        <div>{item.name}</div>
                        <button onClick={() => handleDelete(item.id)}>
                            delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default TodoData;
