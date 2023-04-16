import React, { useState } from "react";

function UserForm(props) {
  const [input, setInput] = useState({ name: "", age: 0 });
  const [isValid, setIsValid] = useState(true);

  const InputHandler = (e) => {
    setInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    const obj = {
      name: input.name,
      age: input.age,
      id: Math.random().toString(),
    };
    // console.log(obj)
    // console.log(props)
    if (input.name.trim().length == 0 || input.age==0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    props.onAddUser(obj);

    input.name = "";
    input.age = 0;
  };

  let alertContent = (
    <div class="alert alert-primary" role="alert">
      A Name can't be empty and age should be greater than 0
    </div>
  );

  return (
    <div className="container">
      {!isValid ? alertContent : ""}
      <form className="container" style={{background:"white",margin:"5px",padding:"5px"}}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={input.name}
            onChange={InputHandler}
            name="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            className="form-control"
            id="age"
            type="number"
            value={input.age}
            onChange={InputHandler}
            name="age"
          ></input>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;
