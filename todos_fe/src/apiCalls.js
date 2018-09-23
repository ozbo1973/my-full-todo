//api calls.
import axios from "axios";
const APIURL = "/api/todos/";

export async function getTodos() {
  return axios
    .get(APIURL)
    .then(res => res.data)
    .catch(err => console.log(err));
}

export async function createTodo(name) {
  return axios
    .post(APIURL, { name })
    .then(res => res.data)
    .catch(err => console.log(err));
}

export async function toggleCompleted(todo) {
  return axios
    .put(`${APIURL}${todo._id}`, { completed: !todo.completed })
    .catch(err => console.log(err));
}

export async function deleteTodo(todo) {
  return axios.delete(`${APIURL}${todo._id}`).catch(err => console.log(err));
}
