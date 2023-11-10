import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://172.21.116.240:8080",
});

axiosClient.interceptors.request.use(
  (config) => {
    const memberId = localStorage.getItem("memberId");

    if (memberId) {
      if (config.data) {
        config.data.loginMemberId = memberId;
      }
    }
    config.headers["Content-Type"] = "application/json";
    config.headers.Accept = "application/json";

    console.log(`Request: ${config.method?.toUpperCase()} ${config.url} ${JSON.stringify(config.data)}`);

    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response.status < 500) {
      console.log(`Response: ${response.config.method?.toUpperCase()} ${response.config.url} ${response.status} ${response.data}`);
      console.log(response.data);
    } else {
      console.error(`Response: ${response.request.method.toUpperCase()} ${response.request.url} ${response.status}`);
    }

    return response;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default axiosClient;
