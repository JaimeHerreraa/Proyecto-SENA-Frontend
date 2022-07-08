import axios from "axios";

export const getEmployee = () => {
  return axios.get("http://localhost:8080/api/employee");
};

export const deleteEmployee = (id) => {
  axios.delete(`http://localhost:8080/api/employee/${id}`);
};

export const postEmployee = (id, first_name, job, last_name, phone, salary) => {
  axios.post("http://localhost:8080/api/employee", {
    id,
    first_name,
    job,
    last_name,
    phone,
    salary,
  });
};
