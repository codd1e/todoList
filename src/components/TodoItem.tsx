import React, {FC, useState} from 'react';
import {ITodo} from "../types/types";

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    const [value, setValue] = useState<boolean> (todo.completed)
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.checked)
        todo.completed = e.target.checked;
    }
    return (
        <div>
            <input type="checkbox" checked={value} onChange={changeHandler}/>
            {todo.id}. {todo.title}
        </div>
    );
};

export default TodoItem;