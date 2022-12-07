import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, removeTask, selectors } from "../slices/tasksSlice";

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectors.selectAll);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  return (
    tasks && (
      <div className="mt-3">
        <ul className="list-group">
          {tasks.map(({ id, name }) => (
            <li key={id} className="list-group-item d-flex">
              <span className="mr-auto">{name}</span>
              <button
                type="button"
                className="close"
                onClick={() => handleRemoveTask(id)}
              >
                <span>&times;</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Tasks;
