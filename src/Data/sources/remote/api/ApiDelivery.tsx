import axios from "axios";

const ApiDelivery = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export { ApiDelivery };
