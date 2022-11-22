import React, { useState } from 'react'

import {v4 as uuidv4} from "uuid";

import { Todos } from './Todos';
import style from './Home.module.css';
import { New_todo } from './New_todo';


export const Home = () => {
  const [todos, setTodos]=useState ([])

  const handleAddATodo = (todo) => {
    setTodos ((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), todo}];
    });
  };
  const onHandleTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id != id)
    setTodos(filteredTodos);

  }

  return (
    <div className={style.container}>
      <h1 style={{color: 'white'}}>Todo App </h1>
      <New_todo onAddTodo={handleAddATodo} />
      <Todos todos={todos} onRemoveTodo={onHandleTodo} />
       
    </div>
  )
}
