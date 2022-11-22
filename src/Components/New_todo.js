import React, { useState } from 'react'

import style from './Newtodo.module.css';

export const New_todo = (props) => {
  const [todo, setTodo] = useState ({title: "" , desc:""});
  const {title,desc} = todo;

  const handleChange = (event) => {
    const name= event.target.name;
    setTodo((oldTodo) => {
      return {...oldTodo, [name]: event.target.value}
    })
  }

  const handleSubmit = (event) => {
    props.onAddTodo (todo);
    event.preventDefault();
    setTodo({title: "", desc: ""})

  }
  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.formfield} >
           <label htmlFor="title">Title :</label>
           <input type="text" name='title' id='title' value={title} onChange={handleChange} />
        </div>
        <div className={style.formfield}>
           <label htmlFor="desc">Decp:</label>
           <textarea type="text" name='desc' id='desc' value={desc} onChange={handleChange} />
        </div>
        <button type='submit'>Add Todo</button>

      </form>
    </div>
  )
}
