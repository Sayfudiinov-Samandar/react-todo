import React, { useState } from "react";

function Main() {
  let array = [];
  const [value, setValue] = useState("");
  const [textTodo, setTextTodo]= useState("")

  const [todos, setTodos] = useState(array);
  //   const [todos, setTodos] = useState([
  // {
  //   id: 1,
  //   text: "Kitob o'qish",
  //   isComplete: false,
  // },
  // {
  //   id: 2,
  //   text: "Code yozish",
  //   isComplete: false,
  // },
  // {
  //   id: 3,
  //   text: "Futbol ko'rish",
  //   isComplete: false,
  // },
  //   ]);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (value) {
      const newTodo = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        text: value,
        isComplete: false,
      };
      array.push(...todos, newTodo);
      setTodos([...todos, newTodo]);
      setValue("");
    } else {
      alert("Sorry enter todos text");
    }
  };

  const delClick = (props) => {
    setTodos(todos.filter((itm) => itm.id !== props));
  };
  const EditTodo = (props) => {
    let newText=prompt("Enter your todo text")
    if (newText) {
        setTextTodo(props.text=newText)
    }
  };

let lineTh
const [todoCheked, setTodoDo]= useState(lineTh)

const todoDo=(props)=>{
        props.isComplete = !props.isComplete;
        if (props.isComplete) {
            lineTh={
                "textDecoration": "line-through"  
            }
            setTodoDo(lineTh)
        }else if(props.isComplete==false){
            lineTh={
                "textDecoration": "none"  
            }
            setTodoDo(lineTh)
        }
    }

  return (
    <>
      <form
        className="bg-primary p-3 w-25 rounded mx-auto mt-3 d-flex justify-content-center"
        onSubmit={handleFormSubmit}>
        <input
          className="form-control w-75 me-2"
          placeholder="Enter your todo"
          value={value}
          type="text"
          onChange={(evt) => setValue(evt.target.value)}
        />
        <button className="btn btn-warning" type="submit">
          Add
        </button>
      </form>

      <ul className="bg-danger p-3 w-50 mx-auto gap-2 mt-3 d-flex flex-column align-items-center list-unstyled rounded ">
        {todos.map((todo) => (
          <li
            className="w-100 d-flex  justify-content-between p-1 bg-primary rounded text-light"
            key={todo.id}>
            <div className="d-flex align-items-center gap-3">
              <input onClick={()=>todoDo(todo)} type="checkbox" />
              <p className="m-0" style={todoCheked}>{todo.text}</p>
            </div>

            <div className="d-flex gap-2">
              <button
                className="btn btn-warning"
                onClick={() => EditTodo(todo)}>
                EDIT
              </button>
              <button
                className="btn btn-danger"
                data-todo-id={todo.id}
                onClick={() => delClick(todo.id)}>
                DELETE
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Main;
