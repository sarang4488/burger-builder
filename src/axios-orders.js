import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-f1939.firebaseio.com/",
});

export default instance;
