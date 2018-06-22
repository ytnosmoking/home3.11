<template>
  <div id="loginCon" class="login-user">
    <div class="logo">
      <img src="../assets/images/logo1.png" alt="">
    </div>
    <!--轮播图-->
    <!-- <div class="block construct" id="lunbo"> -->
    <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
    <el-carousel class="construct" id="lunbo" height="100%">
      <el-carousel-item v-for="(item, key) in lunbo" :key="key">
        <!-- <h3>{{item}}</h3> -->
        <div :class=item.class class="img-wraper" :id=item.id>
          <div class="img-bg " :class=item.bg>
            <div class="shadow" :class=item.shadow></div>
          </div>
          <div class="item-text">
            <div class="title">{{item.title}}</div>
            <p>{{item.title1}}</p>
            <p>{{item.title2}}</p>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>

    <!-- 主体 -->
    <div class="user-bg">
      <div class="user-wraper">
        <!-- 用户名登录 -->
        <div class="user-main">
          <div class="user-mtitle">
            <span class="user-mt-title">用户名登录</span>
          </div>
          <div id="login" class="user-mmain">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="50px">
              <el-form-item prop="gcid" class="user-aqm-input">
                <el-input v-model="ruleForm.gcid" placeholder="安全码"></el-input>
              </el-form-item>
              <el-form-item prop="name" class="user-user-input">
                <el-input v-model="ruleForm.accountName" placeholder="用户名"></el-input>
              </el-form-item>
              <el-form-item prop="password" class="user-pwd-input">
                <el-input v-model="ruleForm.accountPwd" placeholder="密码" type="password" auto-complete="off"></el-input>
              </el-form-item>
              <el-button class="user-submit determine" type="primary" @click="submitForm('ruleForm')">登录</el-button>
            </el-form>
          </div>
          <!--
            <input id="anQuanMa" class="user-aqm-input" tabindex="1" type="text" placeholder="安全码" mustField="请输入安全码" value="" onkeyup="checkVerify('int',10)" />
            <input id="userName" class="user-user-input" tabindex="2" type="text" autocomplete="off" placeholder="用户名" mustField="请输入登录名" value="" onkeyup="checkVerify('string',30)" />
            <input type="text" style="height: 0; border: 0; margin: 0;" />
            <input id="passWord" class="user-pwd-input" tabindex="3" type="password" autocomplete="off" placeholder="密码" mustField="请输入登录密码" value="" onkeyup="checkVerify('string',30)" />
            <button class="user-submit determine" tabindex="4" onclick="login()">登录</button> -->

          <div class="user-mt-img">二维码登录，去登录 →</div>
        </div>

        <!-- 二维码登录 -->
        <div class="qrCode-main">
          <div class="qrCode-mtitle">
            <span class="qrCode-mt-title">二维码登录</span>
          </div>
          <!-- 二维码 -->
          <div name="erweima" class="qrCode-mmain">
            <div name="ewmCode" class="erweimashengcheng" id="ewmCode">
              <!--<img class="qrCode-ewm" src="images/login_erweima.png" alt="">-->
            </div>
            <p class="qrCode-place">请用管家助手APP，扫描二维码登录</p>
            <div name="showMaGuoQi" class="erweiMatimeOut">
              <p class="zheZhaoCeng"></p>
              <div class="guoqiMa">
                <h3>二维码已过期</h3>
                <button onclick="showNewMa()" class="determine" style="background-color:#404040;">请刷新</button>
              </div>
            </div>
          </div>
          <!-- 二维码 end-->
          <!-- 扫码成功 -->
          <div class="shaoma" name="shaoma">
            <img src="images/login_phoneb.png" />
            <h3>扫描成功</h3>
            <p>请在手机端点击确认登录</p>
            <a onclick="showErWeiMa(this)" href="javaScript:;">返回二维码登录>></a>
          </div>
          <div class="qrCode-mt-img">用户名登录，去登录 →</div>
          <!-- 扫码成功 end-->
        </div>
        <!-- 二维码登录 end-->
      </div>
    </div>
  </div>
</template>
<script>
import {setItem} from '@/utils/auth'
import { Message } from "element-ui";
export default {
  name: "login",
  data() {
    let checkGcid = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("gcid不能为空"));
      }
      setTimeout(() => {
        callback();
      }, 1000);
    };
    let checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      setTimeout(() => {
        callback();
      }, 1000);
    };
    let checkPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      }
      setTimeout(() => {
        callback();
      }, 1000);
    };

    return {
      lunbo: [
        {
          title: "房乾PMS正在为公寓解决房屋运营管理问题",
          title1: "PMS IS WORKING TO SOLVE THE HOUSING",
          title2: "OPERATION AND MANAGEMENT PROBLEMS FOR THE APARTMENT",
          class: "img-wraper",
          bg: "bg1",
          shadow: "",
          id: "lunbo_img1"
        },
        {
          title: "数据驱动业绩 闭环创造价值",
          title1: "DATA-DRIVEN PERFORMANCE CLOSED-LOOP CREATES VALUE",
          title2: "",
          class: "img-wraper2",
          bg: "bg2",
          shadow: "shadow2",
          id: "lunbo_img2"
        },
        {
          title: "执行力提升、知识创新、自助高效办公",
          title1: "EXECUTIVE POWER IMPROVEMENT",
          title2: "OPERATION AND MANAGEMENT PROBLEMS FOR THE APARTMENT",
          class: "img-wraper3",
          bg: "bg3",
          shadow: "shadow3",
          id: "lunbo_img3"
        }
      ],
      ruleForm: {
        gcid: "",
        accountName: "",
        accountPwd: ""
      },
      rules: {
        gcid: [{ validator: checkGcid, trigger: "blur" }],
        accountName: [{ validator: checkName, trigger: "blur" }],
        accountPwd: [{ validator: checkPassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store
            .dispatch("LoginByUsername", this.ruleForm)
            .then(res => {
              // console.log(res);
              if (res.status.code == 200) {
                this.$router.push("/layout");
               setItem('navRoutes',JSON.stringify([{"path":"/layout/index","name":"代办"},{"path":"/layout/datas","name":"数据"}]))
              } else {
                Message({
                  message: res.status.msg,
                  type: "error",
                  duration: 3 * 1000
                });
              }
            })
            .catch(err => {
              console.log(err);
              Message({
                message: "网络开了一会小差~~~",
                type: "error",
                duration: 3 * 1000
              });
            });
        } else {
          console.log("error submit");
          return false;
        }
      });
    }
  }
};
</script>
<style>
.loginbg {
  width: 100%;
  height: 100%;
  position: fixed;
  background: url("../assets/images/login_bg.png") no-repeat bottom;
  background-size: cover;
}
.login-user {
  width: 100%;
  height: 100%;
  font-size: 16px;
  float: left;
}
.login-user .user-nav {
  width: 100%;
  height: 80px;
  line-height: 80px;
  box-shadow: 0 1px 2px #ebeeef;
  float: left;
  position: absolute;
  top: 0;
  z-index: 99999;
}
.login-user .user-nav img {
  width: auto;
  height: 38px;
  margin: 0 0 0 40px;
  vertical-align: middle;
}
.login-user .user-bg {
  position: absolute;
  right: 50px;
  z-index: 999;
  padding: 50px 0;
  height: 100%;
  width: 29%;
  min-width: 400px;
  box-sizing: border-box;
}
.user-wraper {
  height: 100%;
  width: 100%;
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  position: absolute;
  z-index: 99999;
  top: 100px;
  left: 100px;
}
/*用户名登录*/
.login-user .user-main {
  /*width:400px;*/
  width: 100%;
  border-radius: 10px;
}
.login-user .user-mtitle {
  /*width:400px;*/
  height: 65px;
  line-height: 65px;
  text-align: center;
  margin-bottom: 20px;
}
.login-user .user-mt-title {
  height: 63px;
  font-size: 24px;
  line-height: 68px;
  border-bottom: 4px solid #000;
  display: inline-block;
}
.login-user .user-mt-img {
  color: #999;
  text-align: center;
  cursor: pointer;
  margin-top: 50px;
}
.login-user .user-mmain {
  /*width:400px;*/
  width: 100%;
  height: auto;
  padding: 20px 0 0;
}
.user-mmain input {
  /*width: 338px;*/
  width: 75%;
  /* width: 100%; */
  height: 48px;
  /* margin: 3vh auto; */
  line-height: 48px;
  text-indent: 3em;
  border: none;
  border-bottom: solid 1px #e0e0e0;
  display: block;
  overflow: hidden;
  margin: 0 auto;
}
.user-mmain .user-aqm-input {
  background: url("../assets/images/login_aqmd.png") no-repeat 70px center;
}
.user-mmain .user-user-input {
  background: url("../assets/images/login_userd.png") no-repeat 70px center;
}
.user-mmain .user-pwd-input {
  background: url("../assets/images/login_pwdd.png") no-repeat 70px center;
  margin-top: 0;
}
.user-mmain input:focus {
  border-color: #464646 !important;
}
.user-mmain .user-aqm-input:focus {
  background-image: url("../assets/images/login_aqmb.png");
}
.user-mmain .user-user-input:focus {
  background-image: url("../assets/images/login_userb.png");
}
.user-mmain .user-pwd-input:focus {
  background-image: url("../assets/images/login_pwdb.png");
}
.user-main .user-mmain input {
  background-size: 16px 18px;
}
.login-user .user-submit {
  /*width:340px;*/
  width: 75%;
  height: 50px;
  margin: 50px auto 0;
  font-size: 18px;
  /* line-height: 50px; */
  border: none;
  border-radius: 5px;
  display: block;
  overflow: hidden;
  cursor: pointer;
  background-color: #464646;
  box-shadow: 0px 8px 12px rgba(83, 83, 83, 0.3);
}
.login-user .user-submit:hover {
  background-color: #3d3d3d;
}
/*二维码登录*/
.login-user .qrCode-main {
  /*width:400px;*/
  border-radius: 10px;
  display: none;
}
.login-user .qrCode-mtitle {
  /*width:400px;*/
  height: 65px;
  line-height: 65px;
  text-align: center;
  margin-bottom: 3vh;
}
.login-user .qrCode-mt-title {
  height: 63px;
  font-size: 24px;
  line-height: 68px;
  border-bottom: 4px solid #000;
  display: inline-block;
}
.login-user .qrCode-mt-img {
  color: #999;
  text-align: center;
  cursor: pointer;
  margin-top: 2vh;
}
.login-user .qrCode-mmain {
  /*width:400px;*/
  height: 374px;
}
.login-user .qrCode-ewm {
  margin: 55px 115px 35px;
  float: left;
  /* display: inline-block; */
}
.login-user .qrCode-place {
  /*width:400px;*/
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: #404040;
  text-align: center;
  display: inline-block;
}
/*-----扫码成功------*/
.shaoma {
  width: 100%;
  height: auto;
  max-height: 370px;
  text-align: center;
  overflow: hidden;
  display: none;
}
.shaoma img {
  margin-top: 50px;
}
.shaoma h3 {
  width: auto;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  color: #404040;
  margin-top: 40px;
  overflow: hidden;
}
.shaoma p {
  width: auto;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #999999;
  overflow: hidden;
}
.shaoma a {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #404040;
  display: block;
  margin-top: 30px;
  cursor: pointer;
  overflow: hidden;
}
.shaoma a:hover {
  color: #333;
}
/*-----扫码成功  end------*/
/*-----生成二维码------*/
.erweimashengcheng {
  width: 100%;
  height: 240px;
  text-align: center;
  margin-bottom: 40px;
  overflow: hidden;
}
.erweimashengcheng img {
  width: 200px;
  height: 200px;
  margin: 40px auto 0;
  overflow: hidden;
}
/*-----生成二维码 end------*/
/*-----二维码已过期-------*/
.qrCode-main .qrCode-mmain {
  position: relative;
}
.erweiMatimeOut {
  width: 200px;
  height: 200px;
  text-align: center;
  overflow: hidden;
  position: absolute;
  top: 40px;
  left: 50%;
  margin-left: -100px;
  z-index: 99;
  display: none;
}
.erweiMatimeOut .zheZhaoCeng {
  width: 200px;
  height: 200px;
  background: #ffffff;
  opacity: 0.9;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.erweiMatimeOut .guoqiMa {
  width: 200px;
  height: 200px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.guoqiMa h3 {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #404040;
  text-align: center;
  margin-top: 55px;
  overflow: hidden;
}
.guoqiMa button {
  width: 80px;
  height: 34px;
  line-height: 34px;
  font-size: 14px;
  text-align: center;
  border: 0;
  border-radius: 2px;
  margin-top: 10px;
  cursor: pointer;
  overflow: hidden;
}
.erweiMatimeOut a:hover {
  color: #02cab0;
}
/*-----二维码已过期 end-------*/

/*轮播*/
html,
body {
  height: 100%;
}
.el-carousel__indicators .el-carousel__button {
  border-radius: 50% !important;
  width: 15px !important;
  height: 15px !important;
}
.img-wraper {
  width: 100%;
  height: 100%;
  padding: 50px;
  box-sizing: border-box;
  background-color: rgba(69, 84, 85, 0.4);
  position: relative;
}
.img-wraper2 {
  background-color: rgba(74, 69, 164, 0.1);
}
.img-wraper3 {
  background-color: rgba(40, 45, 37, 0.3);
}
.shadow {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: rgba(69, 84, 85, 0.2);
}
.shadow2 {
  background-color: rgba(74, 69, 164, 0.4);
}
.shadow3 {
  background-color: rgba(40, 45, 37, 0.2);
}
.img-bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
}
.img-bg.bg1 {
  background: url("../assets/images/login_slider1.jpg ") no-repeat;
  box-shadow: 0 0 50px rgba(69, 84, 85, 0.4);
}
.img-bg.bg2 {
  background: url("../assets/images/login_slider2.jpg ") no-repeat;
}
.img-bg.bg3 {
  background: url("../assets/images/login_slider3.jpg ") no-repeat;
}
.item-text {
  color: #fff;
  position: absolute;
  bottom: 12%;
  right: 37%;
}
@media (max-width: 1250px) {
  .item-text {
    right: 500px;
  }
}
.item-text .title {
  width: 100%;
  margin-bottom: 20px;
  text-align: right;
  font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
    "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
}
.item-text p {
  color: #fff;
  text-align: right;
  line-height: 1.5em;
  font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
    "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
}
@media (min-width: 950px) {
  .item-text {
    font-size: 26px;
  }
  .item-text p {
    font-size: 14px;
  }
}
@media (min-width: 1250px) {
  .item-text {
    font-size: 38px;
  }
  .item-text p {
    font-size: 18px;
  }
}
@media (min-width: 1600px) {
  .item-text {
    font-size: 42px;
  }
  .item-text p {
    font-size: 20px;
  }
}
@media (min-width: 1900px) {
  .item-text {
    font-size: 50px;
  }
  .item-text p {
    font-size: 24px;
  }
}
.construct {
  position: relative;
  width: 100%;
  height: auto;
}
#lunbo {
  position: fixed;
  z-index: -10;
  left: 0;
  top: 0px;
  height: 100%;
  width: 100%;
}
#lunbo_img1 {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url("../assets/images/login_slider1.jpg");
}
#lunbo_img2 {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url("../assets/images/login_slider2.jpg");
}
#lunbo_img3 {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url("../assets/images/login_slider3.jpg");
}
.container {
  position: absolute;
  left: 50%;
  margin-left: -40px;
  bottom: 20px;
}
#lunbo_num {
  float: left;
}
.lunbo_num {
  font-size: 0px;
  margin-right: 15px;
  padding: 5px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
}
.lunbo_num_l {
  font-size: 0px;
  margin-right: 15px;
  padding: 5px;
  border-radius: 50%;
  background-color: #fff;
}
</style>

