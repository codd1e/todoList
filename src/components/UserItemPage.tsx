import React, {useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import TodoItem from "./TodoItem";
import List from "./List";

type userItemParams = {
    id: string;
}

const UserItemPage = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const [todos, setTodos] = useState<ITodo[]>([]);
    const params = useParams<userItemParams> ();
    const navigate = useNavigate()

    useEffect(() => {
        fetchUser();
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/users/${params.id}/todos?_limit=5`);
            setTodos(response.data);
        } catch (err){
            console.log(err)
        }
    }

    const fetchUser = async () => {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
            setUser(response.data);
        } catch (err){
            console.log(err)
        }
    }
    return (
        <div>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city}
            </div>
            <h2>Todo пользователя {user?.name}</h2>
            <List item={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
        </div>
    );
};
export default UserItemPage;