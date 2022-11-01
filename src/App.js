import './App.css';
import Form from './components/Form';
import { useState } from 'react'
function App() {
  const [toDoList, setToDoList] = useState([]);
  const addToDo = (newToDo) => {
    setToDoList([...toDoList, newToDo])
  }

  const handleCheck = (iChange) => {
    const updatedToDoList = toDoList.map((todo, i) => {
      if(iChange === i ){
        const updatedToDo = {...todo, isChecked : !todo.isChecked};
        return updatedToDo;
      }
      return todo;
    });
    setToDoList(updatedToDoList);
  }

  const handleDelete = (iDelete) => {
    const filteredList = toDoList.filter((todo, i) => {
      return i !== iDelete;
    });
    setToDoList(filteredList);
  }
  return (
    <div className="App">
      <Form onNewToDo={addToDo} />
      <div className="d-flex flex-column gap-3 mt-3">
        {
          toDoList.map((toDo, i) => {
            const todoClasses = [];
            if(toDo.isChecked) {
              todoClasses.push("strike-through");
            }
            return(<div className="d-flex justify-content-center align-items-center gap-2" key={i} >
              <p className="mt-2"><span className={todoClasses.join(" ")}>{toDo.text}</span></p>
              <input onChange={handleCheck.bind(this,i)} checked={toDo.isChecked} type="checkbox"/>
              <button onClick={handleDelete.bind(this, i)}>Delete</button>
            </div>)
          })
        }
      </div>
    </div>
  );
}

export default App;
