<template>
  <div class="login">
    <h1>登陆yt3会计核算系统</h1>
		<a-form
		class="loginForm"
    layout="inline"
    :model="formState"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item>
      <a-input v-model:value="formState.user" placeholder="用户名">
        <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input v-model:value="formState.password" type="password" placeholder="密码">
        <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
				@click="login"
        :disabled="formState.user === '' || formState.password === ''"
      >
        Log in
      </a-button>
    </a-form-item>
  </a-form>
  </div>
</template>
<script lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import { defineComponent, reactive, UnwrapRef } from 'vue';
interface FormState {
  user: string;
  password: string;
}
export default defineComponent({
	name: 'login',
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      user: '',
      password: '',
    });
    const handleFinish = (values: FormState) => {
      console.log(values, formState);
    };
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors);
    };
		function login () {
			console.log('login');
			
		}
    return {
      formState,
      handleFinish,
      handleFinishFailed,
			login,
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
  },
});
</script>

<style scoped>
.loginForm {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>