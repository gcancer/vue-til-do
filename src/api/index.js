import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  // axios.post의 결과가 Promise이기 때문에 return을 해줘야 이후 동작 수행 가능
  // const url = 'http://localhost:3000/signup'; // api endpoint 라고도 함
  return instance.post('signup', userData);
}

export { registerUser };
