<template>
    <div class="Login">
        <div class="logoBox">
            <img src="https://img.nbjike.com/jietu/20201128142443.png" width="100px" height="100px">
        </div>
        <div>
            <div class="loginBox">
                <div class="titleFont">
                    <p>登录煌佳运营CRM后台</p>
                </div>
                <div style="text-align:center;">
                    <el-input placeholder="请输入手机号码" class="inputAccount"></el-input>
                </div>
                <div style="text-align:center;">
                    <el-input type="password" placeholder="请输入密码" class="inputAccount"></el-input>
                </div>
                <div style="text-align:center;">
                   <el-button type="primary" style="width: 300px">登录</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>
<style>
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
