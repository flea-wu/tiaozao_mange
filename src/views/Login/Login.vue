<template>
    <div class="Login">
        <div class="logoBox">
            <img src="https://img.nbjike.com/jietu/20201128142443.png"
                 width="100px"
                 height="100px">
        </div>
        <div>
            <el-form ref="form"
                     :model="form"
                     :rules="rules"
            >
                <div class="loginBox">
                    <div class="titleFont">
                        <p>登录煌佳运营CRM后台</p>
                    </div>
                    <div style="text-align:center;">
                        <el-form-item prop="phone">
                            <el-input
                                    placeholder="请输入手机号码"
                                    class="inputAccount"
                                    v-model="form.phone"/>
                        </el-form-item>
                        <el-form-item prop="password" >
                            <el-input
                                    type="password"
                                    placeholder="请输入密码"
                                    class="inputAccount"
                                    v-model="form.password"
                            />
                        </el-form-item>
                        <el-button
                                type="primary"
                                style="width: 300px"
                                @click="loginMethod">登录</el-button>
                    </div>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        phone: '',
        password: '',
      },
      // 表单校验
      rules: {
        phone: [
          {
            required: true, message: '手机号不能为空', trigger: ['change', 'blur'],
          },
        ],
        password: [
          {
            required: true, message: '密码不能为空', trigger: ['change', 'blur'],
          },
          {
            required: true,
            pattern: /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{6,12}$/,
            message: '密码应是6-12位数字、字母或字符！',
            trigger: ['change', 'blur'],
          },
        ],
      },
    };
  },
  methods: {
    loginMethod() {
      console.log(this.form);
    },
  },
};
</script>
<style>
    .el-form-item {
        margin-bottom: 0;
        text-align: center;
    }
    .el-form-item__error {
        top: 42px;
        left: 42px;
        padding-top: 0;
        position: absolute;
    }
    .logoBox {
        position: absolute;
        top: 15%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .loginBox{
        width: 380px;
        height: 290px;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 2%;
        box-shadow: 0 4px 16px 0 rgba(160,178,255,.23);
        transform: translate(-50%,-50%);
        background: #fff;
    }
    .Login {
        width: 100%;
        height: 100%;
        background: url('https://img.nbjike.com/jietu/1599709732605.png') fixed no-repeat;
        margin: 0;
        padding: 0;
        position: absolute;
        background-size:100% 100%;
    }
    .inputAccount {
        width: 300px;
        position: relative;
        text-align: center;
        margin-bottom: 15px;
    }
    .titleFont{
        height: 30px;
        font-size: 22px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 30px;
        text-align: center;
        margin-bottom: 46px;
    }

</style>
