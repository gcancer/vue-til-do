import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors.js';

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}

const instance = createInstance();

// 회원가입 API
function registerUser(userData) {
  // axios.post의 결과가 Promise이기 때문에 return을 해줘야 이후 동작 수행 가능
  // const url = 'http://localhost:3000/signup'; // api endpoint 라고도 함
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  console.log(userData);
  console.log(instance);
  return instance.post('login', userData);
}

// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
  return instance.get('posts');
}

export { registerUser, loginUser, fetchPosts };
