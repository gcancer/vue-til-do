import Vue from 'vue';
import LoginForm from '@/components/LoginForm.vue';

//component의 이름이 최소 그룹 단위 'LoginForm.vue'
describe('LoginForm.vue', () => {
  test('컴포넌트가 마운팅 되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
    const instance = new Vue(LoginForm).$mount();
    console.log(instance);
    expect(instance.password).toBe('');
  });
});
