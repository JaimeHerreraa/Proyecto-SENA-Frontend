import axios from "axios";

export const getPendingTask = () => {
  return axios.get("http://localhost:8080/api/task/pending");
};

export const getTasks = () => {
  return axios.get("http://localhost:8080/api/task");
};

export const postTask = (first_name, last_name, info, cost, task_date) => {
  axios.post("http://localhost:8080/api/task", {
    first_name,
    last_name,
    info,
    cost,
    state: "pendiente",
    task_date,
  });
};

export const updateTaskComplete = (id) => {
  axios.put(`http://localhost:8080/api/task/${id}`, {
    state: "completado",
  });
};

export const updateTaskCancel = (id) => {
  axios.put(`http://localhost:8080/api/task/${id}`, {
    state: "cancelado",
  });
};

export const deleteTask = (id) => {
  axios.delete(`http://localhost:8080/api/task/${id}`);
};
