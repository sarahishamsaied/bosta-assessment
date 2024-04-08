import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://tracking.bosta.co/shipments/track",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
