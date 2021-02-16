// 로그인, 회원가입, (ex) 회원 탈퇴 등등
import { instance } from '@/api/index.js';

// 회원가입 API
function registerUser(userData) {
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
