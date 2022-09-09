import fetch from "unfetch";

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
};
export const getAllStudents = () => {
  fetch("http://localhost:8080/api/v1/students").then(checkStatus);
};
