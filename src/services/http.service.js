import axios from "axios";
const axiosConfig = {
  baseURL: "https://mocki.io/v1/af29529b-ae7d-45a6-81c7-abf4fcb1d14d",
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
  async update(url, body) {
    return instance.patch(url, body).then((res) => res.data);
  }
  async delete(url, body) {
    return instance.delete(url, body).then((res) => res.data);
  }
}
const http = new Request();
export default http;
