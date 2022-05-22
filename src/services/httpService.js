import axios from "axios";

axios.defaults.baseURL =
  "https://my-json-server.typicode.com/khorshidhoseiny/http-app-server-api/";

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};

export default http;
