import React, { useState, useEffect } from 'react';
import './App.css';
import { FaCheck, FaPlusCircle, FaTrash } from 'react-icons/fa';

function App() {
  const [todos, setTodos] = useState([]);
  const [pendente, setPendente] = useState([]);
  const [concluida, setConcluida] = useState([]);
  const [input, setInput] = useState('');
  const addTodo = () => {
    const todo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
    };
    setTodos([todo, ...todos]);
  };
  const addToProgress = (id) => {
    const item = todos.find((x) => x.id === id);
    setPendente([item, ...pendente]);
    const filterarray = todos.filter((x) => x.id !== id);
    setTodos(filterarray);
  };
  const deleteTodo = (id) => {
    const filterarray = todos.filter((x) => x.id !== id);
    setTodos(filterarray);
  };
  const addtoCompleted = (id) => {
    const item = pendente.find((x) => x.id === id);
    setConcluida([item, ...concluida]);
    const filterarray = pendente.filter((x) => x.id !== id);
    setPendente(filterarray);
  };

  useEffect(() => {}, [todos, pendente]);
  return (
    <div className="App">
      <div className="container">
        <h3 className="title">ToDo List App</h3>
        <form className="form_todo">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Insira Sua Todo"
            name="text"
          />
          <button type="button" className="btn" onClick={() => addTodo()}>
            <FaPlusCircle className="icon" />
          </button>
        </form>
        <div className="todos_wrapper">
          <div className="todos_list">
            <h3 className="todo_title">Todos List</h3>
            {todos.map((item, index) => (
              <div className="todo_card" key={item.id}>
                <p className="card_text">{item.text}</p>
                <FaCheck
                  onClick={() => addToProgress(item.id)}
                  className="icon-check-todo"
                />
                <FaTrash
                  onClick={() => deleteTodo(item.id)}
                  className="icon-trash-todo"
                />
              </div>
            ))}
          </div>
          <div className="todos_list">
            <h3 className="todo_title">Pendente</h3>
            {pendente.map((item, index) => (
              <div className="progress_card" key={item.key}>
                <p className="card_text">{item.text}</p>
                <FaCheck
                  onClick={() => addtoCompleted(item.id)}
                  className="icon-progress-todo"
                />
              </div>
            ))}
          </div>
          <div className="todos_list">
            <h3 className="todo_title">Concluída</h3>
            {concluida.map((item, index) => (
              <div className="completed_card" key={item.id}>
                <p className="card_text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
