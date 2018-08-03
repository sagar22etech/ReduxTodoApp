import Axios from "axios";

export default function callAjax(URL, method, data) {
  const url = `http://localhost:3000/` + URL;
  if (method === "GET") {
    return Axios.get(url, data);
  } else if (method === "DELETE") {
    return Axios.delete(url, data);
  } else if (method === "POST") {
    return Axios.post(url, data);
  } else {
    return Axios.put(url, data);
  }
}
