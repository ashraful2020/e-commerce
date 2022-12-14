import axios from "axios";
const axiosConfig = {
  baseURL: "https://amarstore.herokuapp.com/api/v1",
  // baseURL: "http://localhost:5000/api/v1",
  timeout: 20000,

};
const instance = axios.create(axiosConfig);

class Request {
  async get(url) {
    return instance.get(url).then((res) => res.data);
  }
  async post(url, body) {
    return instance.post(url, body).then((res) => res.data);
  }
  async put(url, body) {
    return instance.put(url, body).then((res) => res.data);
  }
  async updateByPatch(url, body) {
    return instance.patch(url, body).then((res) => res.data);
  }
  async delete(url, body) {
    return instance.delete(url, body).then((res) => res.data);
  }
}
const http = new Request();
export default http;
