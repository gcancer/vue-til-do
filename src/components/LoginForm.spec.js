import { shallowMount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';

//component의 이름이 최소 그룹 단위 'LoginForm.vue'
describe('LoginForm.vue', () => {
  test('ID가 이메일 형식이 아니면 경고 메시지가 출력된다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    }); // shallowMount로 화면에 부착한다
    const warningText = wrapper.find('.warning'); // find는 template내의 태그들을 추적하는데 CSS선택자로 추적 가능
    // console.log(warningText.html());
    expect(warningText.exists()).toBeTruthy();
  });
  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const button = wrapper.find('button');
    expect(button.element.disabled).toBeTruthy(); //toBeTruthy: 앞에 있는 값이 true인지 아닌지 판단할 때 많이 씀
  });
});
