<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input
        :class="{ inputBorder: !isUsernameValid }"
        id="username"
        type="text"
        v-model="username"
      />
    </div>
    <div>
      <label for="password">pw: </label>
      <input
        :class="{ inputBorder: !password }"
        id="password"
        type="text"
        v-model="password"
      />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input
        :class="{ inputBorder: !nickname }"
        id="nickname"
        type="text"
        v-model="nickname"
      />
    </div>
    <button
      :disabled="!isUsernameValid || !password || !nickname"
      type="submit"
    >
      회원 가입
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index.js';
import { validateEmail } from '@/utils/validation.js';
export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      nickname: '',
      // log
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    // 부가 동작을 하기 위해선 메서드에 비동기 처리가 필요함
    async submitForm() {
      // button을 누르면 이벤트 버블링에 의해 form태그로 정보가 올라감 @submit으로 받아서 메서드로 전달
      // .prevent -> 제출 후에 새로고침 방지
      try {
        const userData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        };
        //const response
        const { data } = await registerUser(userData);
        console.log(data.username);
        this.logMessage = `${data.username}님이 가입되었습니다`;
      } catch (error) {
        this.logMessage = error.response.data.errmsg;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      // js는 type이 없기 때문에 null로 해도 상관은 없지만..
      //견고한 코드를 위해서, 복잡한 시스템을 위해서 타입 정의를 하는게 버그를 줄일 수 있다.

      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style>
.inputBorder {
  border: 2px solid red;
}
</style>
