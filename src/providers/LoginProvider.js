import axios from "axios";

async function validateUser(email, password) {
  const request = await axios.get("http://localhost:8080/api/user");
  const data = request.data;
  if (data.email === email && data.password === password) {
    window.location.href = "/homepage";
  } else {
    alert("Ingrese el usuario correcto");
  }
}

export default validateUser;
