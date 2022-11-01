import React, { useState } from 'react'

const Form = (props) => {
  const[toDo, setToDo] = useState({
    text : "",
    isChecked : false
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewToDo(toDo);
    setToDo({
        text : "",
        isChecked : false
    });
  }

  const handleForm = (e) => {
    if(e.target.value.length > 0){
        setToDo({...toDo, text: e.target.value})
    }
  }

  return (
    <form onSubmit = {handleSubmit}>
        <h1>TO DO</h1>
        <input type="text" value={toDo.text} onChange = { handleForm } />
        <button className="mt-3" type="submit">Add</button>
    </form>
  )
}

export default Form