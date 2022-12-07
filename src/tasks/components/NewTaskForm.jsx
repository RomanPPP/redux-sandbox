import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendTask } from "../slices/tasksSlice";

const NewTaskForm = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    const task = { name };
    dispatch(sendTask(task));
    setName("");
  };

  const onChange = (e) => setName(e.target.value);

  return (
    <form action="" className="form-inline" onSubmit={handleAddTask}>
      <div className="form-group mx-sm-3">
        <input
          type="text"
          data-testid="input"
          required
          value={name}
          onChange={onChange}
        />
      </div>
      <input
        type="submit"
        data-testid="submit"
        className="btn btn-primary btn-sm"
        value="Add"
      />
    </form>
  );
};

export default NewTaskForm;
